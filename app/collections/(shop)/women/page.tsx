"use client"
import { NextPage } from 'next';
import Cards from '@/components/Cards';
import { listWomen } from '@/database/tShirtsDB';





const Mujeres:NextPage = () => {
  return (   
    <>
      <div className=' h-screen w-full flex justify-center flex-wrap px-10 '>
          <div className='w-full h-screen flex flex-row justify-center items-center flex-wrap  ' >
            {
              listWomen.map((element,index)=>(
                <Cards key={index} list={element}/>
              ))
            }
          </div>
      </div>
    </>
 
  )
}


export default Mujeres;
