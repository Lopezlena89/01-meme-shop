'use client'
import { AuthContext } from "@/context/auth";
import { useForm } from "@/hooks/useForm";
import { Button, Input, Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useContext } from "react";


type FormData = {
  name:       string;
  email:      string;
  password:   string;
}

export default function Page(){

      const {registerUser} = useContext(AuthContext);
      const router = useRouter();
      const {state,onInputChange,name,email,password} = useForm({name:'',email:'',password:''});    


      const handleRegister = async(e: any) =>{
        e.preventDefault();
        registerUser(name,email,password)
        router.push('/')
        
      }

  
    return (
      <>
        <div className="container flex flex-row justify-center items-center w-screen h-screen">
           <form onSubmit={(e)=>handleRegister(e)} className="auth flex flex-col justify-center mb-5"> 
              <h3 className="text-2xl">Register</h3>
              <Input  
                    className="mt-3" 
                    type="name" 
                    label="Name"  
                    variant="underlined" 
                    placeholder="Enter your name" 
                    name='name'
                    value={name}
                    onChange={onInputChange}
              />
              <Input  
                    className="mt-3" 
                    type="email" 
                    label="Email" 
                    variant="underlined" 
                    placeholder="Enter your email" 
                    name='email'
                    value={email}
                    onChange={onInputChange}

              />
              <Input  
                    className="mt-3" 
                    type="password" 
                    label="Password" 
                    variant="underlined" 
                    placeholder="Enter your password" 
                    name='password'
                    value={password}
                    onChange={onInputChange}
              />
              <Button type="submit" className="mt-3 bg-primary-100"  >
                Sign up
              </Button>
              <div className="flex justify-end mt-7">
                <Link href="/auth/login" className="text-lg">Ya tengo cuenta</Link>
              </div>
           </form>
        </div>
      </>
    )
}
  