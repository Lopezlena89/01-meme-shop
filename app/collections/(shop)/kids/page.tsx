"use client"

import { NextPage } from 'next';
import Cards from '@/components/Cards';
import { useEffect, useState } from 'react';
import { getProductskids } from '@/actions/product/product-pagination';




const Ninos:NextPage = () => {

  const [state, setState] = useState<any[]>([]);

  const newVariable = async()=>{
    const data = await getProductskids();
    setState(data);
    
  }
  useEffect(() => {
    newVariable()
  }, [])
  

  return (
    
    <>
      <div className=' h-screen w-full flex justify-center flex-wrap px-10 '>
          
          <div className='w-full h-screen flex flex-row justify-center items-center flex-wrap  ' >
            {
              state.map((element,index)=>(
                <Cards key={index} list={element}/>
              ))
            }
          </div>
      </div>
    </>
 
  )
}


export default Ninos;

