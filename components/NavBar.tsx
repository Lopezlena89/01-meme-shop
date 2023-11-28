'use client'

import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, 
        Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Image, Badge, Avatar} from "@nextui-org/react";
import { CartIcon } from "./CartIcon";
import { items } from "@/interfaces/menuItems";


const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isInvisible, setIsInvisible] = useState(false);

    const menuItems:items[] = [
        {
            element:"Men",
            href:'/collections/men'
        },
        {
            element:"Women",
            href:'/collections/women'
        },
        {
            element:"Kids",
            href:'/collections/kids'
        },
        {
            element:"New",
            href:'/collections/new'
        },
        {
            element:"Profile",
            href:'/profile'
        },
        {
            element:"Cart",
            href:'/cart'
        },
        {
            element:"Contact",
            href:'/contact'
        },
        {
            element:"Instagram",
            href:'#'
        },
        {
            element:"Log Out",
            href:'/auth/login'
        },
        
        
    ];
  return (
    <>
        <Navbar className="bg-gray-800 text-white" onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent >
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link href="/">
                        <Image  
                            width={50}
                            alt="La vida es un meme"
                            src="/logo_01.jpeg"
                            style={{borderRadius:'100%'}}
                        />
                    </Link>
                
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex  gap-3" justify="center">
                <NavbarItem>
                    <Link className="text-white" underline="hover" href="/collections/men">
                        Men
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link className="text-white" underline="hover" href="/collections/women" >
                        Women
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white" underline="hover" href="/collections/kids">
                        Kids
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white" underline="hover" href="/collections/new">
                        New
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden sm:flex">
                    <Link href="/cart"> 
                    <Badge color="danger" content={10} isInvisible={isInvisible} shape="rectangle">
                        <CartIcon size={25} height={10} width={10} />
                    </Badge>
                    </Link>
                </NavbarItem>
                <NavbarItem className="hidden sm:flex">
                    <Link href="/profile">
                        <Badge content="0" className="text-white"  color="primary">
                            <Avatar
                                radius="md"
                                size="sm"
                                src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
                            />
                        </Badge>
                    </Link>
                </NavbarItem>
                <NavbarItem className="hidden sm:flex ">
                    <Link className="text-white" href="/auth/login">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} className='text-white' href="/auth/register" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
          
            </NavbarContent>
            <NavbarMenu >
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.element}-${index}`}>
                    <Link
                        color={
                        index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                        }
                        className="w-full"
                        href={item.href}
                        size="lg"
                    >
                        {item.element}
                    </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        
    
        </Navbar>
    </>
  )
}

export default NavBar;
