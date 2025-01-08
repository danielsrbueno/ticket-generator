"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {

    return (
        <div className="w-screen h-screen bg-slate-950 flex flex-col items-center justify-center text-zinc-50 background">
            <div className="flex flex-col items-center justify-evenly gap-4 mb-10">
                <Image 
                    className="-ml-1"
                    src="/logo-full.svg"
                    width={192}
                    height={40}
                    alt="Coding Conf Logo"
                />
            </div>
            <div className="flex flex-col items-center gap-5 w-full">
                <h1 className="text-4xl font-extrabold">Ticket not found!</h1>
                <p className="text-lg text-center">Something went wrong. Please try again.</p>
                <Link href="/ticket" 
                    onClick={() => {
                        localStorage.removeItem('ticketId')
                    }} 
                    className="text-sm underline tracking-tighter text-orange-400 hover:text-orange-500">
                    <Button className="bg-orange-600 hover:bg-orange-700 font-bold">Back</Button>
                </Link>
            </div>
        </div>
    )
}