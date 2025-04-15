import { LuArrowRight } from "react-icons/lu";
import { Button } from "./ui/button"
import styles from "@/style"
import phone from '../assets/phone.mp4'

const Hero = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`w-full lg:w-2/3 ${styles.flexStart} flex-col px-6`}>
                <h1 className="font-poppins font-semibold sm:text-[62px] text-[42px] sm:leading-16 leading-12">
                    Compra en <span className="text-[#004099] block">Ciudad del Este</span>sin moverte de tu casa
                </h1>
                <p className={`${styles.paragraph} text-[#71717A] max-w-[470px] my-3 ml-1`}>
                    Nosotros la conseguimos por vos y la traemos a Buenos Aires. ¡Hablá con nosotros y lo hacemos realidad!
                </p>
                <Button asChild className={`bg-[#004099] hover:bg-[#004099]/80 ml-1`}>
                    <a href="#">
                        Contactanos <LuArrowRight />
                    </a>
                </Button>
            </div>
            <div className={`${styles.flexStart} hidden lg:block lg:w-[600px] lg:pr-5`}>
                <video preload="auto" src={phone} className="rounded-sm w-full h-full object-cover" autoPlay loop muted playsInline></video>
            </div>
        </section>
    )
}

export default Hero