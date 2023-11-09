"use client"
import { NextPage } from 'next';
import Cards from '@/components/Cards';
import { list } from '@/database/tShirtsDB';
import { Logo_principal } from '@/components/Logo_principal';
import { Divider } from '@nextui-org/react';
import {useTheme} from "next-themes";



const Ninos:NextPage = () => {
  const { theme, setTheme } = useTheme()

  return (
    
    <>
      <div className='w-full h-screen m-3 flex flex-wrap'>
          <Logo_principal/>
          <Divider/>
          <button onClick={() => setTheme('light')}>Light Mode</button>
          <button onClick={() => setTheme('dark')}>Dark Mode</button>
         
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

