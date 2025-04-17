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

    const handleScroll = (id) => {
        const e = document.getElementById(id)
        if (e) {
            e.scrollIntoView({ behavior: 'smooth' })
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
                                className={`${isLast ? "" : "text-black"} cursor-pointer`}
                                onClick={() => handleScroll(nav.id)}
                            >
                                {nav.title}
                            </Button>

                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}

export default Navbar