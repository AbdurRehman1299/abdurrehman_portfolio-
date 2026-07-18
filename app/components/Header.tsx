'use client';

import Image from "next/image";
import Link from "next/link";
import {assets} from "@/lib/assets";
import {useEffect, useRef, useState} from "react";

const NavBar = () => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef<HTMLUListElement>(null);

    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = "translateX(-16rem)";
        }
    }

    const closeMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = "translateX(16rem)";
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        }, {passive: true});
    }, []);

    return (
        <header>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? " bg-black/50 backdrop-blur-lg shadow-sm" : ""}`}>
                <Link href={'/'}>
                    <Image src={assets.logo_dark} alt={'logo'} className={"w-35 cursor-pointer mr-14"} width={360} height={70}/>
                </Link>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-black/50 shadow-sm"} `}>
                    <li><Link href={'#top'}>Home</Link></li>
                    <li><Link href={'#about'}>About Me</Link></li>
                    <li><Link href={'#services'}>Services</Link></li>
                    <li><Link href={'#projects'}>Projects</Link></li>
                </ul>

                <div className={'flex items-center gap-4'}>
                    <Link href={'#contact'} className={"hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-50 rounded-full ml-4"}>Contact <Image src={assets.arrow_icon_dark} alt={'arrow-icon'} className={"w-3"} width={39} height={39} /> </Link>
                    <button className={'md:hidden block ml-3 cursor-pointer'} onClick={openMenu}>
                        <Image src={assets.menu_white} alt={'menu-button'} className={'w-6'} width={72} height={58}/>
                    </button>
                </div>

                {/*Mobile Menu*/}

                <ul ref={sideMenuRef} list-style-type={'none'} className={'flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-[#252625] transition duration-500'}>
                    <div className={'absolute right-6 top-6'} onClick={closeMenu}>
                        <Image src={assets.close_white} alt={'close-button'} className={"w-6 cursor-pointer"} width={29} height={29}/>
                    </div>

                    <li><Link href={'#top'} onClick={closeMenu}>Home</Link></li>
                    <li><Link href={'#about'} onClick={closeMenu}>About Me</Link></li>
                    <li><Link href={'#services'} onClick={closeMenu}>Services</Link></li>
                    <li><Link href={'#projects'} onClick={closeMenu}>Projects</Link></li>
                    <li><Link href={'#contact'} onClick={closeMenu}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar
