import logo from '../assets/logo.png'
import { Button } from './ui/button';

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
    return (
        <nav className="w-full flex py-4 px-6 justify-between items-center">
            <a href="/">
                <img src={logo} alt="logo" className="w-[36px] h-36px]" />
            </a>
            <ul className="list-none md:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => {
                    const isLast = index === navLinks.length - 1;
                    return (
                        <li key={nav.id} className='cursor-pointer mr-5 last:mr-0'>
                            <Button asChild variant={isLast ? "default" : "ghost"}>
                                <a href={`#${nav.id}`} className="font-poppins font-normal">
                                    {nav.title}
                                </a>
                            </Button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}

export default Navbar