"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { InputWithLabel } from "@/components/inputWithLabel"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import Link from "next/link"

const findTicketSchema = z.object({
    userName: z.string()
    .nonempty('Enter your name')
    .transform(name => {
        return name.trim().split(' ')[0].toLocaleLowerCase()
    }),
    ticketId: z.coerce.number()
        .min(1000, 'Ticket ID must be at least 1000')
})

export default function FindTicket() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(findTicketSchema)
    })

    const router = useRouter()

    async function findTicket(data) {
        router.push(`/ticket/${data.userName}-${data.ticketId}`)
        localStorage.setItem('ticketId', `${data.userName}-${data.ticketId}`)
    }

    return (
        <div className="w-screen h-screen bg-slate-950 flex flex-col items-center justify-center text-zinc-50 background gap-8">
            <h1 className="text-4xl font-extrabold text-center max-sm:text-2xl">Find your ticket</h1>
            <form onSubmit={handleSubmit(findTicket)} className="w-1/3 flex flex-col items-center gap-5 max-md:w-8/12">
                <InputWithLabel 
                    id="userName" 
                    label="First Name" 
                    type="text"
                    register={register('userName')}
                    error={errors.userName?.message}
                />
                <InputWithLabel 
                    id="ticket" 
                    label="Ticket ID" 
                    type="text"
                    placeholder="1234"
                    register={register('ticketId')}
                    error={errors.ticketId?.message}
                />
                <div className="w-full flex flex-col items-center justify-center gap-1">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700" type="submit">Find My Ticket</Button>
                    <Link href="/" className="text-sm underline tracking-tighter text-orange-400 hover:text-orange-500">I don't have a ticket</Link>
                </div>
            </form>
        </div>
    )
}