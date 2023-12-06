'use client'
import { AuthContext } from "@/context";
import { useForm } from "@/hooks/useForm";
import { Button, Input, Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function Page(){

  const {loginUser} = useContext(AuthContext);
  const router = useRouter();
  const {state,onInputChange,email,password} = useForm({email:'',password:''});    


  const handleRegister = async(e: any) =>{
    e.preventDefault();
    loginUser(email,password)
    router.push('/')
    
  }

    return (
      <>
        <div className="container flex flex-row justify-center items-center w-screen h-screen">
           <form onSubmit={handleRegister} className="auth flex flex-col justify-center mb-5"> 
              <h3 className="text-2xl">Login</h3>
              <Input 
                className="mt-3" 
                type="email" 
                variant="underlined" 
                label="Email" 
                placeholder="Enter your email" 
                name='email'
                value={email}
                onChange={onInputChange}
              />
              <Input 
                className="mt-3" 
                type="password" 
                variant="underlined" 
                label="Password" 
                placeholder="Enter your password" 
                name='password'
                value={password}
                onChange={onInputChange}
              />
              <Button type="submit" className="mt-3 bg-primary-100"  >
                Login
              </Button>
              <div className="flex justify-end mt-7">
                <Link href="/auth/register" className="text-lg">No tengo cuenta</Link>
              </div>
           </form>
        </div>

      </>
    )
  }
  