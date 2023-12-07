import { Button, Divider } from "@nextui-org/react";
import Link from "next/link";


export default function Page(){
  return (
    <>
      <div className="w-[60%] " style={{border:'5px solid black'}}>


      </div>
      <div className="w-[40%]  flex justify-center" style={{border:'5px solid black'}}>
          <div className="m-6 p-6 w-full " style={{border:'1px solid black'}}>
            <span className="ml-2 font-bold text-lg">{`Ordern  (10 productos)`}</span>
            <Divider/>
            <div className="mt-4 w-full">
              <div  className="flex justify-between">
                <span className="font-bold">Direccion de entrega</span>
                <Link className="underline" href={"/"}>Editar</Link>
              </div>
              <p >Luis Mariano Lopez Lena Valdivieso</p>
              <p >Jose Maria Coss 1243, La normal</p>
              <p >Guadalajara, Jalisco</p>
              <p >CP:44250</p>
            </div>
            <Divider/>
            <div className="p-2 w-full flex justify-end">
              <Link className="underline" href={"/"}>Editar</Link>
            </div>
            <div className="w-full flex justify-between">
              <span>No de productos</span>
              <span>6 productos</span>
            </div>
            <div className="w-full flex justify-between">
              <span>Subtotal</span>
              <span>$850</span> 
            </div>
            <div className="w-full flex justify-between">
              <span>{`Impuestos (15%)`}</span>
              <span>$127.20</span>
            </div>
            <div className="mt-4 w-full flex justify-between font-bold">
              <span>Total</span>
              <span>$977.20</span>
            </div>
            <Button className="w-full mt-10 bg-primary-100">Confirmar ordern</Button>

          </div>
      </div>
    </>
  )
}
