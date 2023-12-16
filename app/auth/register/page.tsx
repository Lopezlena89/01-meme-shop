'use client'
import { registerUserPrisma } from "@/actions/user/register";
import { Button, Input, Link } from "@nextui-org/react";
import Cookies from "js-cookie";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInputs = {
  name: string;
  email: string;
  password: string;  
}

export default function Page(){
      

      const [errorMessage, setErrorMessage] = useState('')
      const { register, handleSubmit, formState: {errors} } = useForm<FormInputs>();


      const onSubmit: SubmitHandler<FormInputs> = async(data) => {
        setErrorMessage('');
        const { name, email, password } = data;
         // Server action
        const resp = await registerUserPrisma( name, email, password );
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
           <form onSubmit={ handleSubmit( onSubmit ) }   className="auth flex flex-col justify-center mb-5"> 
              <h3 className="text-2xl">Register</h3>
              <Input  
                    className="mt-3" 
                    type="text" 
                    label="Name"  
                    variant="underlined" 
                    placeholder="Enter your name" 
                    autoFocus
                    { ...register('name', { required: true }) }
              />
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
  