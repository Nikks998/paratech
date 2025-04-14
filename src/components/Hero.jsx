import { LuArrowRight } from "react-icons/lu";
import { Button } from "./ui/button"
import styles from "@/style"
import phone from '../assets/phone.mp4'

const Hero = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`w-full flex-1 ${styles.flexStart} flex-col xl:px-0 px-6`}>
                <h1 className="flex-1 font-poppins font-semibold sm:text-[62px] text-[42px] sm:leading-16 leading-12">
                    Compra de <span className="text-[#004099] block">Ciudad del Este</span>sin moverte de tu casa
                </h1>
                <p className={`${styles.paragraph} text-[#71717A] max-w-[470px] my-3 font-normal`}>
                    Nosotros la conseguimos por vos y la traemos a Buenos Aires. ¡Hablá con nosotros y lo hacemos realidad!
                </p>
                <Button asChild className={`bg-[#004099] hover:bg-[#004099]/80`}>
                    <a href="#">
                        Contactanos <LuArrowRight />
                    </a>
                </Button>
            </div>
            <div className={`${styles.flexStart} hidden lg:block xl:w-[600px] w-[500px] h-[337px] lg:pr-5 mt-2`}>
                <video src={phone} autoPlay loop muted></video>
            </div>
        </section>
    )
}

export default Hero