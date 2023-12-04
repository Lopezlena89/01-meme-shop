import { Button, Input, Link } from "@nextui-org/react";

export default function Page(){
    return (
      <>
        <div className="container flex flex-row justify-center items-center w-screen h-screen">
           <div className="auth flex flex-col justify-center mb-5"> 
              <h3 className="text-2xl">Login</h3>
              <Input className="mt-3" type="email" variant="underlined" label="Email" placeholder="Enter your email" />
              <Input className="mt-3" type="password" variant="underlined" label="Password" placeholder="Enter your password" />
              <Button className="mt-3 bg-primary-100"  >
                Login
              </Button>
              <div className="flex justify-end mt-7">
                <Link href="/auth/register" className="text-lg">No tengo cuenta</Link>
              </div>
           </div>
        </div>

      </>
    )
  }
  