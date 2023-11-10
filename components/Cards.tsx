'use client';
import { FC } from 'react';
import { Button, Card, CardFooter, Image } from '@nextui-org/react';
import { tShirts } from '@/interfaces/tShirts';
import {BsCart} from 'react-icons/bs'


interface Props{
  list:tShirts,
}

const Cards:FC<Props>= ({list}) =>{

  return (
    <> 
      <div className='m-3 md:w-72 lg:w-80 h-96' >
        <Card
        isFooterBlurred
        radius="lg"
        className="border-none md:w-72 lg:w-80 h-96"
       
        >
          <Image
            alt="Woman listing to music"
            className="object-cover md:w-72 lg:w-80 h-96 "
            src={list.img}
           
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Available soon.</p>
            <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
              Notify me
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export  default Cards;