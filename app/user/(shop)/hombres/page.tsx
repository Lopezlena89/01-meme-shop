"use client"
import { NextPage } from 'next';
import Cards from '@/components/Cards';
import { list } from '@/database/tShirtsDB';
import { Logo_principal } from '@/components/Logo_principal';
import { Divider } from '@nextui-org/react';




const Hombres:NextPage = () => {


  return (
    
    <>
      <div className='h-screen w-screen flex flex-wrap'>
          <Logo_principal/>
          <Divider/>
          
         
        <div className='generalBox'>
          <div style={{width:'100%',height:'100px', display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <h2 className='title_shirts' style={{fontSize:'50px'}}>Tendencias Hombres</h2>
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


export default Hombres;
