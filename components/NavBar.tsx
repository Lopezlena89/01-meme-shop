'use client'

import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, 
        Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Image, Badge, Avatar} from "@nextui-org/react";
import { CartIcon } from "./CartIcon";


const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isInvisible, setIsInvisible] = useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];
  return (
    <>
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent >
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Image  
                        width={50}
                        alt="La vida es un meme"
                        src="/logo_01.jpeg"
                    />
                
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex  gap-3" justify="center">
                <NavbarItem>
                    <Link color="foreground" underline="hover" href="/user/men">
                        Men
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link color='foreground' underline="hover" href="/user/women" >
                        Women
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" underline="hover" href="/user/kids">
                        Kids
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" underline="hover" href="/user/new">
                        New
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden sm:flex">
                    <Link href="#"> 
                    <Badge color="danger" content={10} isInvisible={isInvisible} shape="rectangle">
                        <CartIcon size={25} height={10} width={10} />
                    </Badge>
                    </Link>
                </NavbarItem>
                <NavbarItem className="hidden sm:flex">
                    <Link href="#">
                        <Badge  color="primary">
                            <Avatar
                                radius="md"
                                size="sm"
                                src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
                            />
                        </Badge>
                    </Link>
                </NavbarItem>
                <NavbarItem className="hidden sm:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                    Sign Up
                    </Button>
                </NavbarItem>
          
            </NavbarContent>
            <NavbarMenu >
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                        color={
                        index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                        }
                        className="w-full"
                        href="#"
                        size="lg"
                    >
                        {item}
                    </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        
    
        </Navbar>
    </>
  )
}

export default NavBar;
