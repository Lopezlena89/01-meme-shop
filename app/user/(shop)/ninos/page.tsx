"use client"
import { NextPage } from 'next';
import Cards from '@/components/Cards';
import { list } from '@/database/tShirtsDB';




const Ninos:NextPage = () => {
  const style='ninos'
 
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


export default Ninos;

