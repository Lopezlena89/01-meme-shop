"use client"

import { NextPage } from 'next';
import Cards from '@/components/Cards';
import { list } from '@/database/tShirtsDB';
import { Divider } from '@nextui-org/react';




const Ninos:NextPage = () => {


  return (
    
    <>
      <div className='w-full h-screen m-3 flex flex-wrap'>
        <div className='generalBox'>
          <div style={{width:'100%',height:'100px', display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <h2 className='title_shirts' style={{fontSize:'50px'}}>Tendencias Niños</h2>
          </div> 
          {
            list.map((element,index)=>(
              <Cards key={index} list={element}/>
            ))
          }
        </div> 
      </div>
    </>
 
  )
}


export default Ninos;

