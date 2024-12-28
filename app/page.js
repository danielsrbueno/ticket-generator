import { Button } from "@/components/ui/button";
import { InputWithLabel } from "../components/inputWithLabel";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-slate-950 flex flex-col items-center justify-evenly text-zinc-50">
      <div className="flex flex-col items-center justify-evenly -my-60 gap-4">
        <strong className="text-xl">Coding Conf</strong>
        <h1 className="w-[28rem] text-4xl font-bold text-center">Your Journey to Coding Conf 2025 Starts Here!</h1>
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
