'use client';
import { FC } from 'react';
import { Button, Image } from '@nextui-org/react';
import { tShirts } from '@/interfaces/tShirts';
import {BsCart} from 'react-icons/bs'


interface Props{
  list:tShirts,
 
  
}

const Cards:FC<Props>= ({list}) =>{

  return (
    <> 
      <div className='box-tshirts'>
          <Image
            shadow="sm"
            radius="lg"
            className={list.class}
            src={list.img}
            alt={list.title}
          />
          <div className='under_box'>
            <span className='dark:text-background'>{list.price}</span>
            <Button className='text-foreground bg-primary-200  dark:bg-primary-200  dark:text-foreground'  variant="solid">
              <BsCart/>
              <span >Comprar</span>
            </Button>
          </div>
      </div>
    </>
  )
}

export  default Cards;