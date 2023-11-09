'use client'

import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import {AiOutlineHome} from 'react-icons/ai';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import {AiOutlineWoman} from 'react-icons/ai';
import {RiMenLine} from 'react-icons/ri';
import {IoFootballOutline} from 'react-icons/io5';
import {MdOutlineFiberNew} from 'react-icons/md';
import {PiSignOutDuotone} from 'react-icons/pi';
import {MdDarkMode} from 'react-icons/md';
import {HiOutlineLightBulb} from 'react-icons/hi';
import {BiSearch} from 'react-icons/bi';
import {useTheme} from "next-themes";

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
    
   
]

const SideNav = () => {
    const [isCollapseSidebar,setIsCollapseSidebar] = useState(false);
    const toogleSidebarCollapseHandler = () =>{
        setIsCollapseSidebar(((prev)=>!prev)) 
    } 
    const { theme, setTheme } = useTheme()
   
    
  return (
    <div className="sidebar__wrapper h-screen " style={{borderRight:'1px solid gray'}}>
        <button className={`btn bg-primary-200  dark:bg-primary-300`} onClick={toogleSidebarCollapseHandler} >
            <BsFillArrowLeftCircleFill/>
        </button>
        <aside className="sidebar dark:bg-background " data-collapse={isCollapseSidebar}>
            <div className="sidebar__top">
                <Image 
                    src='/logo_01.jpeg' 
                    alt='la vida es un meme'
                    width={80}
                    height={80}
                    className='sidebar__logo'
                />
                <p className="sidebar__logo-name ">La vida es un meme</p>
            </div>
            <ul className="sidebar__list dark:bg-background">
                {
                    sidebarItems.map(({name, href,icon}) =>(
                        <li className='sidebar_item' key={name}>
                            <Link href={href} className={`${name}  sidebar__link bg-primary-200  dark:bg-primary-300`}>
                                <span className='sidebar__icon dark:text-background'>
                                {icon}
                                </span>
                                <span className="sidebar__name dark:text-background">{name}</span>
                            </Link>
                        </li>
                    ) )
                }
            </ul>
            <div className="last_box">
                <ul className="sidebar__list w-25 dark:bg-background">
                    <li className='sidebar_item'>
                        <Link href={'/'} className={`sidebar__link bg-primary-200  dark:bg-primary-300`}>
                            <span className='sidebar__icon dark:text-background'>
                                <PiSignOutDuotone/>
                            </span>
                            <span className="sidebar__name dark:text-background">{'SignOut'}</span>
                        </Link>
                    </li>
                </ul>
                <div className="box_theme">

                    {
                        theme === 'light'
                         ?  <button onClick={() => setTheme('dark')} style={{fontSize:'30px', color:'#F875AA'}}>
                               <MdDarkMode/>
                            </button>
                         :  <button onClick={() => setTheme('light')} style={{fontSize:'30px', color:'#9BBEC8'}}>
                                <HiOutlineLightBulb/>
                            </button>
                    }
                        
                </div>
            </div>
        </aside>
    </div>
  )
}


export default SideNav;