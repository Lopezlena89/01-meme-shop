'use client'

import { useState } from "react";
import { Button, Input, Link } from "@nextui-org/react";
import { loginUserPrisma } from "@/actions/user/login";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";

type FormInputs = {
  email: string;
  password: string;  
}


export default function Page(){
  const [errorMessage, setErrorMessage] = useState('')
  const { register, handleSubmit, formState: {errors} } = useForm<FormInputs>();
  
  

  const onSubmit = async(data: any) =>{
    setErrorMessage('');
    const { email, password } = data;
    const resp = await loginUserPrisma(email,password)
    Cookies.set('logged','true');
        if ( !resp.ok ) {
          setErrorMessage( resp.message );
          return;
        }
    window.location.replace('/');
    
  }

    return (
      <>
        <div className="container flex flex-row justify-center items-center w-screen h-screen">
           <form onSubmit={ handleSubmit( onSubmit ) }  className="auth flex flex-col justify-center mb-5"> 
              <h3 className="text-2xl">Login</h3>
              <Input  
                    className="mt-3" 
                    type="email" 
                    label="Email" 
                    variant="underlined" 
                    placeholder="Enter your email" 
                    { ...register('email', { required: true, pattern: /^\S+@\S+$/i }) }

              />
              <Input  
                    className="mt-3" 
                    type="password" 
                    label="Password" 
                    variant="underlined" 
                    placeholder="Enter your password" 
                    { ...register('password', { required: true, minLength: 6 }) }
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
  