"use client"
import { NextPage } from 'next';
import Cards from '@/components/Cards';
import {getProductsMen} from '../../../../actions/product/product-pagination'
import { useEffect, useState } from 'react';

export interface Data{
  id: string;
  img: string;
  inStock: number;
  price: number;
  sizes: string[];
  title: string;
  type: string;
  gender: string;
}
const Hombres:NextPage = () => {
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
              state.map((element,index)=>(
                <Cards key={index} list={element}/>
                

              ))
            }
          </div>
      </div>
    </>
 
  )
}


export default Hombres;
