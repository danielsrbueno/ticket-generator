"use client"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Github } from "lucide-react"
import api from "@/services/api"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from "react-loading-skeleton"

export default function Ticket() {
    const { ticketId } = useParams()
    const [ticket, setTicket] = useState(null)
    const [avatarUrl, setAvatarUrl] = useState(null)

    const id = ticketId?.split("-")[1]
    const userName = ticketId?.split("-")[0]

    useEffect(() => {
        async function getTicket() {
            try {
                const response = await api.get('/ticket', {
                    params: {
                        id: id,
                        userName: userName,
                    }
                })
                setTicket(response.data)
            } catch (error) {
                console.error('Failed to fetch ticket:', error)
            }
        }
        getTicket()
    }, [])

    useEffect(() => {
        async function getGitHubProfileImage() {
            if (ticket?.userGithub) 
                try {
                    const response = await fetch(`https://api.github.com/users/${ticket?.userGithub}`)

                    if (!response.ok) 
                        throw new Error(`Error: ${response.status} - ${response.statusText}`)
                    
                    const userData = await response.json()
                    setAvatarUrl(userData.avatar_url)
                } catch (error) {
                    console.error('Failed to fetch GitHub profile image:', error)
                }

        }
        getGitHubProfileImage()
    }, [ticket?.userGithub])

    const ticketid = ticket?.ticketId
    const ticketcode = ticketid?.split("-")[1]
    const email = ticket?.userEmail
    const github = ticket?.userGithub
    let fullname = ticket?.userName
    fullname = fullname?.split(" ")
    fullname = fullname ? fullname[0] + " " + fullname[fullname.length - 1] : ""

    return (
        <div className="w-screen h-screen bg-slate-950 flex flex-col items-center justify-center text-zinc-50 background gap-8">
            <Link href="/"><Button className="absolute top-2 right-2 bg-orange-600 hover:bg-orange-700" type="submit"><Home />Back to home</Button></Link>
            <Image 
                className="-ml-1"
                src="/logo-full.svg"
                width={192}
                height={40}
                alt="Coding Conf Logo"
            />
            <h1 className="text-4xl font-bold w-[36rem] text-center">Congrats, <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f57463] to-zinc-50 font-extrabold">{ticket?.userName ? fullname + "!" : <Skeleton height={36} width={280} baseColor="#ffffff0f" highlightColor="#ffffff99" duration={0.8}/>} </span>Your ticket is ready.</h1>
            <p className="text-zinc-50/90 font-extralight w-[28rem] text-center -mt-5">We've emailed your ticket to {email || <Skeleton height={20} width={160} baseColor="#ffffff0f" highlightColor="#ffffff99" duration={0.8} inline={true}/>} and will send updates in the run up to the event.</p>
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
                    {avatarUrl ? 
                        <img
                            className="rounded-lg"
                            width={80}
                            alt="Github Avatar"
                            src={avatarUrl || "/favicon.ico"}
                        /> : 
                        <Skeleton height={80} width={80} baseColor="#ffffff0f" highlightColor="#ffffff99" duration={0.8}/>
                    }
                    
                    <div className="h-full flex flex-col gap-2 py-2">
                        <p className="font-semibold text-lg">{fullname || <Skeleton height={24} width={160} baseColor="#ffffff0f" highlightColor="#ffffff99" duration={0.8}/>}</p>
                        <span className="flex items-center gap-1 text-xs">
                            <Github width={16}/>
                            <p>@{github || <Skeleton height={16} width={120}  baseColor="#ffffff0f" highlightColor="#ffffff99" duration={0.8}/>}</p>
                        </span>
                    </div>
                </div>
                <div className="absolute left-[27.46rem] flex items-center rotate-90 text-zinc-50/60 text-xl font-extralight">
                    <p>{ticket?.ticketId ? `#${ticketcode}` : <Skeleton height={20} width={60} baseColor="#ffffff0f" highlightColor="#ffffff99" duration={0.8}/>}</p>
                </div>
            </div>
        </div>
    )
}