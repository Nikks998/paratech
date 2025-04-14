import logo from '../assets/logo.png'
import { Button } from './ui/button';

const navLinks = [
    {
        id: "home",
        title: "Inicio",
    },
    {
        id: "features",
        title: "Contacto",
    },
    {
        id: "about us",
        title: "Nosotros",
    },
    {
        id: "clients",
        title: "Clientes",
    },
];

const Navbar = () => {
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <a href="/">
                <img src={logo} alt="logo" className="w-[36px] h-36px]" />
            </a>
            <ul className="list-none md:flex hidden justify-end items-center flex-1">
                {
                    navLinks.map((nav) => (
                        <li key={nav.id} className='cursor-pointer mr-5 last:mr-0'>
                            <Button asChild variant={'ghost'}>
                                <a href={`#`} className={`font-poppins font-normal`}> {/* El boton de shadcn no me deja llegar mas alla de la ancho de la fuente q importe, por q su el tamanio del boton  */}
                                    {nav.title}
                                </a>
                            </Button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar