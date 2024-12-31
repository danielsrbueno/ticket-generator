import Image from "next/image"
import Form from "@/components/form";

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
      <Form />
    </div>
  );
}
