import { Button } from "@/components/ui/button";
import Image from "next/image"
import { InputWithLabel } from "../components/inputWithLabel";

export default function Home() {
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
        <h1 className="w-[50rem] text-5xl font-bold text-center">Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p className="text-zinc-300">Secure your spot at next year's biggest coding conference.</p>
      </div>
      <form className="w-1/3 flex flex-col items-center gap-4">
        <InputWithLabel 
          id="fullname" 
          label="Full Name" 
          type="text"
        />
        <InputWithLabel 
          id="email" 
          label="Email Address" 
          type="email"
          placeholder="example@email.com"
        />
        <InputWithLabel 
          id="github" 
          label="Github Username" 
          type="text"
          placeholder="yourusername"
        />
        <Button className="w-full bg-orange-600 hover:bg-orange-700" type="submit">Generate My Ticket</Button>
      </form>
    </div>
  );
}
