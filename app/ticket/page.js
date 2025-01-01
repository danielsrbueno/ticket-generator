"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { InputWithLabel } from "@/components/inputWithLabel"
import { Button } from "@/components/ui/button"

const searchTicketSchema = z.object({
    email: z.string().email(),
    ticket: z.coerce.number()
})

export default function SearchTicket(){
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(searchTicketSchema)
    })

    const [output, setOutput] = useState("")

    function searchTicket(data) {
        setOutput(JSON.stringify(data))
    }

    return (
        <div className="w-screen h-screen bg-slate-950 flex flex-col items-center justify-center text-zinc-50 background gap-8">
            <h1 className="text-3xl font-bold">Search your ticket</h1>
            <form onSubmit={handleSubmit(searchTicket)} className="w-1/3 flex flex-col items-center gap-5">
                <InputWithLabel 
                    id="email" 
                    label="Email" 
                    type="email"
                    placeholder="example@email.com"
                    register={register('email')}
                    error={errors.email?.message}
                />
                <InputWithLabel 
                    id="ticket" 
                    label="Ticket ID" 
                    type="text"
                    placeholder="12346"
                    register={register('ticket')}
                    error={errors.ticket?.message}
                />
                <Button className="w-full bg-orange-600 hover:bg-orange-700" type="submit">Search My Ticket</Button>
                <pre>{output}</pre>
            </form>
        </div>
    )
}