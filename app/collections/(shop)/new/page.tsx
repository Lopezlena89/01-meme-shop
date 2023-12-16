"use client"
import { NextPage } from 'next';
import Cards from '@/components/Cards';
import { IProduct } from '@/interfaces';
import { useEffect, useState } from 'react';
import { getProductsMen } from '@/actions/product/product-pagination';

const Nuevo:NextPage = () => {
  const [state, setState] = useState<any[]>([]);

  const newVariable = async()=>{
    const data = await getProductsMen();
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
            state.map((element:IProduct,index:number)=>(
              <Cards key={index} list={element}/>
            ))
          }
        </div>
    </div>
  </>
 
  )
}


export default Nuevo;
