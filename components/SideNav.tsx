'use client'

import Image from "next/image"
import Link from "next/link"

import {AiOutlineHome} from 'react-icons/ai';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import {AiOutlineWoman} from 'react-icons/ai';
import {RiMenLine} from 'react-icons/ri';
import {IoFootballOutline} from 'react-icons/io5';
import {MdOutlineFiberNew} from 'react-icons/md';
import {PiSignOutDuotone} from 'react-icons/pi';
import {BiSearch} from 'react-icons/bi';
import { useState } from "react";



const sidebarItems = [
    {
        name:'Home',
        href:'/user/hombres',
        icon:<AiOutlineHome/>
    },
    {
        name:'Hombres',
        href:'/user/hombres',
        icon:<RiMenLine/>
    },
    {
        name:'Mujeres',
        href:'/user/mujeres',
        icon:<AiOutlineWoman/>
    },
    {
        name:'Niños',
        href:'/user/ninos',
        icon:<IoFootballOutline/>
    },
    {
        name:'Nuevos',
        href:'/user/nuevos',
        icon:<MdOutlineFiberNew/>
    },
    {
        name:'Buscar',
        href:'',
        icon:<BiSearch/>
    },
    {
        name:'SignOut',
        href:'/',
        icon:<PiSignOutDuotone/>
    },
   
]

const SideNav = () => {
    const [isCollapseSidebar,setIsCollapseSidebar] = useState<boolean>(false);

    const toogleSidebarCollapseHandler = ( ) =>{
       
        setIsCollapseSidebar(((prev)=>!prev)) 
    } 

  return (
    <div className="sidebar__wrapper h-screen" style={{borderRight:'1px solid gray'}}>
        <button className="btn" onClick={toogleSidebarCollapseHandler} >
            <BsFillArrowLeftCircleFill/>
        </button>
        <aside className="sidebar " data-collapse={isCollapseSidebar}>
            <div className="sidebar__top">
                <Image 
                    src='/logo_01.jpeg' 
                    alt='la vida es un meme'
                    width={80}
                    height={80}
                    className='sidebar__logo'
                />
                <p className="sidebar__logo-name">La vida es un meme</p>
            </div>
            <ul className="sidebar__list">
                {
                    sidebarItems.map(({name, href,icon}) =>(
                        <li className="sidebar_item" key={name}>
                            <Link href={href} className='sidebar__link'>
                                <span className="sidebar__icon">
                                {icon}
                                </span>
                                <span className="sidebar__name">{name}</span>
                            </Link>
                        </li>
                    ) )
                }
            </ul>
        </aside>
    </div>
  )
}


export default SideNav;