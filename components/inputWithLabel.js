import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputWithLabel ({ id, label, type, placeholder, register, error }){
    return (
        <span className="w-full">
          <Label 
            className=""
            htmlFor={id}
          >
            {label}
          </Label>
          <Input 
            className="bg-zinc-50/5 backdrop-blur cursor-pointer border-zinc-50/50 hover:bg-zinc-50/20 focus:bg-zinc-50/20"
            type={type} 
            id={id} 
            placeholder={placeholder}
            {...register}
          />
          <span className="text-sm text-red-400 absolute select-none">{error}</span>
        </span>
    )
}