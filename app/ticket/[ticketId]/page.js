//"use client"
import Image from "next/image"
import { Github } from "lucide-react"

export default function Ticket({ fullname, email, github, ticketcode }) {
    ticketcode = "#01609"
    email = "contato@danbueno.com"
    github = "danielsrbueno"
    userimg = "https://avatars.githubusercontent.com/u/111004405"
    fullname = "Daniel da Silva Ramos Bueno"
    fullname = fullname.split(" ")
    fullname = fullname[0] + " " + fullname[fullname.length -1]

    return (
        <div className="w-screen h-screen bg-slate-950 flex flex-col items-center justify-center text-zinc-50 background gap-8">
            <Image 
                className="-ml-1"
                src="/logo-full.svg"
                width={192}
                height={40}
                alt="Coding Conf Logo"
            />
            <h1 className="text-4xl font-bold w-[36rem] text-center">Congrats, <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f57463] to-zinc-50 font-extrabold">{fullname}! </span>Your ticket is ready.</h1>
            <p className="text-zinc-50/90 font-extralight w-[28rem] text-center -mt-5">We've emailed your ticket to {email} and will send updates in the run up to the event.</p>
            <div className="ticketshape w-[32.5rem] h-64 flex flex-col backdrop-blur-sm justify-around px-6">
                <div className="text-zinc-50/90 font-thin text-xs flex flex-col gap-2">
                    <Image
                        className=""
                        src="/logo-full.svg"
                        width={220}
                        height={40}
                        alt="Coding Conf Logo"
                    />
                    <p className="ml-12">Jan 31, 2025 / Austin, TX</p>
                </div>
                <div className="flex gap-4">
                    <img
                        className="rounded-lg"
                        src={userimg}
                        width={80}
                        alt="Coding Conf Logo"
                    />
                    <div className="h-full flex flex-col gap-2 py-2">
                        <p className="font-semibold text-lg">{fullname}</p>
                        <span className="flex items-center gap-1 text-xs">
                            <Github width={16}/>
                            <p>@{github}</p>
                        </span>
                    </div>
                </div>
                <div className="absolute left-[27.46rem] flex items-center rotate-90 text-zinc-50/60 text-xl font-extralight">
                    <p>{ticketcode}</p>
                </div>
            </div>
        </div>
    )
}