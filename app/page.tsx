'use client'
import Image from "next/image";
import NavBar from "@/components/NavBar";
import {Button, Card, CardFooter, CardHeader, Divider, Input, Link } from "@nextui-org/react";


export default function Homepage() {

    
   
    return (
      <>
        <div className="h-screen w-full ">
          <div className="bg-background">
              <NavBar/>
          </div>
          <div className="flex flex-col">
              <div className="flex flex-col lg:flex-row " >
                <Image
                  src={"/banner/zelda-banner.webp"}
                  alt={"zelda-banner"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full lg:w-1/2"
                />
                <Image
                  src={"/banner/rockstar.webp"}
                  alt={"new-launch"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full lg:w-1/2"
                />
              </div>
              <div className="flex flex-row bg-neutral-200">
                <div className="w-screen flex justify-center  md:w-1/2  xl:w-[400px] h-[500px] ">
                  <Link href="/collections/men">
                    <Card className=" w-full   xl:w-[400px] h-[500px] " radius='none'>
                      <CardHeader className="absolute z-10 top-1 ">
                        <h4 className="text-white text-xl font-bold ">Best Seller</h4>
                      </CardHeader>
                      <Image
                        width={0}
                        height={0}
                        alt="Card background"
                        className="w-full  xl:w-[400px] h-[500px]"
                        src="/men/16974-principal.webp"
                        sizes="100vw"
                      />
                    </Card>
                  </Link>
                </div>
                <div className=" w-0 md:w-1/2  flex flex-row justify-around items-center  xl:w-full overflow-hidden  ">
                  <Link href="/collections/men">
                    <Card
                      isFooterBlurred
                      radius="lg"
                      className="border-none md:w-72 lg:w-80 h-96"
                      >
                      <Image
                        alt="men"
                        width={0}
                        height={0}
                        className="object-cover  md:w-72 lg:w-80 h-96 "
                        src="/men/17002-p2.webp"
                        sizes="100vw"
                      />
                      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-bolder text-white/80">$300</p>
                        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                          Comprar
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                  <Link href="/collections/women" className="hidden xl:flex justify-center">
                    <Card
                      isFooterBlurred
                      radius="lg"
                      className="border-none md:w-72 lg:w-80 h-96"
                      >
                      <Image
                        alt="men"
                        width={0}
                        height={0}
                        className="object-cover  md:w-72 lg:w-80 h-96 "
                        src="/women/16940-M.webp"
                        sizes="100vw"
                      />
                      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-bolder text-white/80">$350</p>
                        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                          Comprar
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                  <Link href="/collections/women" className="hidden lg:flex">
                    <Card
                      isFooterBlurred
                      radius="lg"
                      className="border-none md:w-72 lg:w-80 h-96"
                      >
                      <Image
                        alt="men"
                        width={0}
                        height={0}
                        className="object-cover  md:w-72 lg:w-80 h-96 "
                        src="/women/16993-principal.webp"
                        sizes="100vw"
                      />
                      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-bolder text-white/80">$400</p>
                        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                          Comprar
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex w-full h-[500px]">
                <Image 
                  src={"/banner/Banner-1.webp"} 
                  alt={"Banner"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className='  w-screen h-[500px] '
                  />
              </div>
              <div className="hidden md:flex w-full h-[400px] bg-primary">
                  <div className="w-1/2 flex flex-row justify-around mt-12">
                    <div className="text-white flex flex-col ">
                        <span className="font-bold text-lg">Contacto</span>
                        <Divider className="my-4 bg-neutral-50" />
                        <span>Contacto</span>
                        <span>App</span>
                    </div>
                    <div className="text-white flex flex-col ">
                        <span className="text-white font-bold text-lg">Informacion</span>
                        <Divider className="my-4 bg-neutral-50" />
                        <span>Preguntas frecuentes</span>
                        <span>Tiendas</span>
                        <span>Aviso de privacidad</span>
                        <span>Terminos y condiciones</span>
                    </div>
                    <div className="text-white font-light flex flex-col ">
                        <span className="text-white font-bold text-lg">Compras</span>
                        <Divider className="my-4 bg-neutral-50" />
                        <span>Nuevos Lanzamientos</span>
                        <span>Politicas de devolucion</span>
                        <span>Formas de pago</span>
                        <span>Centros de devoluciones</span>
                        <span>Rastreo de pedidos</span>
                        <span>Mayoreo</span>
                        <span>Rebajas</span>
                    </div>
                  </div>
                  <Divider 
                    orientation="vertical"  
                    className="bg-neutral-50 h-[300px] relative top-12" 
                    />
                  <div className="w-1/2 ">
                        <div className="mt-12 flex flex-col text-center items-center">
                          <span className="text-white font-bold text-4xl">Suscribete a nuestro Newsletter</span>
                          <Input className="w-3/4 text-white " color="danger" type="email" variant='underlined' label="Email" />
                        </div>
                  </div>
              </div>  
              <div className="flex flex-col w-full h-[200px] bg-primary  md:hidden">
                <div className="mt-12 flex flex-col text-center items-center">
                  <span className="text-white font-bold text-4xl">Suscribete a nuestro Newsletter</span>
                    {/* <Input onClick={logOut} className="w-11/12 text-white " color="danger" type="email" variant='underlined' label="Email" />  */}
                </div>
               </div>
          </div>
        </div>
      </>
    )
  }