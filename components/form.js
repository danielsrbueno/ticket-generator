"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { InputWithLabel } from "@/components/inputWithLabel"
import { Button } from "@/components/ui/button"

const createUserSchema = z.object({
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
        resolver: zodResolver(createUserSchema)
    })

    const [output, setOutput] = useState('')

    function createUser(data) {
        setOutput(JSON.stringify(data))
    }

    return (
        <form onSubmit={handleSubmit(createUser)} className="w-1/3 flex flex-col items-center gap-5">
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
            <Button className="w-full bg-orange-600 hover:bg-orange-700" type="submit">Generate My Ticket</Button>
            <pre>{output}</pre>
      </form>
    )
}