"use client"
import { NextPage } from 'next';
import Cards from '@/components/Cards';

import { useProducts } from '@/hooks/useProducts';
import { IProduct } from '@/interfaces';





const Mujeres:NextPage = () => {

  const {data,isError,isLoading} = useProducts('/product/getProduct/women')
  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (   
    <>
      <div className=' h-screen w-full flex justify-center flex-wrap px-10 '>
          <div className='w-full h-screen flex flex-row justify-center items-center flex-wrap  ' >
            {
              data.products.map((element:IProduct,index:number)=>(
                <Cards key={index} list={element}/>
              ))
            }
          </div>
      </div>
    </>
 
  )
}


export default Mujeres;
