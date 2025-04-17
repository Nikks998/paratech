import { LuArrowRight } from "react-icons/lu";
import { Button } from "./ui/button"
import styles from "@/style"
import phone from '../assets/phone.mp4'

const Hero = () => {
    return (
        <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`w-full lg:w-2/3 ${styles.flexStart} flex-col xl:pl-6 px-6 font-poppins`}>
                <h1 className="font-semibold sm:text-[62px] text-[42px] sm:leading-16 leading-12">
                    Compra en <span className="text-primary block">Ciudad del Este</span>sin moverte de tu casa
                </h1>
                <p className={`${styles.paragraph} text-[#71717A] max-w-[580px] my-3 ml-1`}>
                    Nosotros la conseguimos por vos y la traemos a Buenos Aires. ¡Hablá con nosotros y lo hacemos realidad!
                </p>
                <Button asChild className={`ml-1 w-40`} size={"lg"}>
                    <a href="#" className="font-semibold">
                        Contactanos <LuArrowRight className="ml-1 size-5" />
                    </a>
                </Button>
            </div>
            <div className={`${styles.flexStart} hidden lg:block lg:w-[500px] lg:pr-5`}>
                <video preload="auto" src={phone} className="rounded-sm w-full h-full object-cover" autoPlay loop muted playsInline></video>
            </div>
        </section>
    )
}

export default Hero