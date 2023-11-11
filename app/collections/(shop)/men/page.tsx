"use client"
import { NextPage } from 'next';
import Cards from '@/components/Cards';
import { listMen } from '@/database/tShirtsDB';

const Hombres:NextPage = () => {
  return (
    <>
      <div className=' h-screen w-full flex justify-center flex-wrap px-10 '>
          
          <div className='w-full h-screen flex flex-row justify-center items-center flex-wrap  ' >
            {
              listMen.map((element,index)=>(
                <Cards key={index} list={element}/>
              ))
            }
          </div>
      </div>
    </>
 
  )
}


export default Hombres;
