'use client';
import { FC } from 'react';
import { Button, Image } from '@nextui-org/react';
import { tShirts } from '@/interfaces/tShirts';
import {BsCart} from 'react-icons/bs'


interface Props{
  list:tShirts,
  color:string
  
}

const Cards:FC<Props>= ({list,color}) =>{

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
          <div className={`under_box ${color}`}>
            <span>{list.price}</span>
            <Button color="primary" variant="solid">
              <BsCart/>
              <span>Comprar</span>
            </Button>
          </div>
      </div>
    </>
  )
}

export  default Cards;