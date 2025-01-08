"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { InputWithLabel } from "@/components/inputWithLabel"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import api from "@/services/api"
import Link from "next/link"
import emailjs from '@emailjs/browser'

const createTicketSchema = z.object({
    fullname: z.string()
    .nonempty('Enter your name')
    .transform(name => {
        return name.trim().split(' ').map((word, i) => {
            return word.length < 4 && i !== 0 
            ? word[0] + word.substring(1).toLocaleLowerCase()
            : word[0].toLocaleUpperCase() + word.substring(1).toLocaleLowerCase()
        }).join(' ')
    }),
    email: z.string()
        .nonempty('Enter your email')
        .email('Invalid email format'),
    github: z.string()
        .nonempty('Enter your GitHub username')
})

export default function Form() {
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(createTicketSchema)
    })

    const router = useRouter()

    async function createTicket(data) {
        const response = await api.post('/ticket', {
            userName: data.fullname,
            userEmail: data.email,
            userGithub: data.github
        })

        const ticketId = response.data.ticketId

        router.push(`/ticket/${response.data.ticketId}`)
        localStorage.setItem('ticketId', response.data.ticketId)
        emailjs.send('service_ss1570s', 'template_twaj7yj', {
            user_name: data.fullname,
            to_email: data.email,
            ticket_code: ticketId.split('-')[1]
        }, 'dQqmKUYxImvotDZ3B').then((res) => {
            console.log('Email sent! ', res.status)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <form onSubmit={handleSubmit(createTicket)} className="w-1/3 flex flex-col items-center gap-5 max-md:w-8/12">
            <InputWithLabel 
                id="fullname" 
                label="Full Name" 
                type="text"
                register={register('fullname')}
                error={errors.fullname?.message}
            />
            <InputWithLabel 
                id="email" 
                label="Email Address" 
                type="email"
                placeholder="example@email.com"
                register={register('email')}
                error={errors.email?.message}
            />
            <InputWithLabel 
                id="github" 
                label="Github Username" 
                type="text"
                placeholder="yourusername"
                register={register('github')}
                error={errors.github?.message}
            />
            <div className="w-full flex flex-col items-center justify-center gap-1">
                <Button className="w-full bg-orange-600 hover:bg-orange-700" type="submit">Generate My Ticket</Button>
                <Link href="/ticket" className="text-sm underline tracking-tighter text-orange-400 hover:text-orange-500">I already have a ticket</Link>
            </div>
      </form>
    )
}