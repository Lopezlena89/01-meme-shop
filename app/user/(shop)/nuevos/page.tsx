"use client"
import { NextPage } from 'next';
import Cards from '@/components/Cards';
import { list } from '@/database/tShirtsDB';




const Nuevo:NextPage = () => {
  const style='Nuevo'
 
  return (
    <>
     <div className='w-full h-screen m-3 flex flex-wrap'>
       {
         list.map((element,index)=>(
          <Cards key={index} list={element} color={style}/>
         ))
       }
     </div>
    </>
 
  )
}


export default Nuevo;
