import { useState } from 'react';
import { Button } from './ui/button';
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import logo from '../assets/logo.png'


const navLinks = [
    {
        id: "home",
        title: "Inicio",
    },
    {
        id: "servicios",
        title: "Servicios",
    },
    {
        id: "nosotros",
        title: "Nosotros",
    },
    {
        id: "contactanos",
        title: "Contactanos",
    },
];

const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const handleScroll = (id) => {
        const e = document.getElementById(id)
        if (e) {
            e.scrollIntoView({ behavior: 'smooth' })
            setMobileDrawerOpen(false)
        }
    }
    return (
        <nav className="w-full flex py-4 px-6 justify-between items-center font-poppins">
            <a href="/" className='flex items-center'>
                <img src={logo} alt="logo" className="md:size-[36px] size-[30px] " />
                <span className='text-xl tracking-tight font-semibold'>
                    Para<span className='text-primary'>Tech</span>
                </span>
            </a>
            <ul className="list-none md:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => {
                    const isLast = index === navLinks.length - 1;
                    return (
                        <li key={nav.id} className='cursor-pointer mr-5 last:mr-0'>
                            <Button
                                variant={isLast ? "default" : "link"}
                                className={`${isLast ? "" : "text-black"} cursor-pointer text-[15px]`}
                                onClick={() => handleScroll(nav.id)}
                            >
                                {nav.title}
                            </Button>
                        </li>
                    );
                })}
            </ul>
            <div className="lg:hidden md:flex flex-col justify-end">
                <button onClick={toggleNavbar} className='md:hidden flex justify-center items-center'>
                    {mobileDrawerOpen ? <MdClose size={'30px'}/> : <IoMdMenu size={'30px'}/>}
                </button>
            </div>
            {
                mobileDrawerOpen && (
                    <div className='md:hidden fixed right-2 top-18 z-20 p-4 bg-slate-50/80 rounded-xl border border-slate-300/70'>
                        <ul className='flex flex-col justify-center items-center'>
                            {navLinks.map((nav) => {
                                return (
                                    <li key={nav.id} className='cursor-pointer'>
                                        <Button
                                            variant={"link"}
                                            className={`text-black cursor-pointer font-semibold`}
                                            onClick={() => handleScroll(nav.id)}
                                        >
                                            {nav.title}
                                        </Button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar