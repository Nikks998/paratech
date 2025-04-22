import { Button } from "./ui/button"
import { LuArrowRight } from "react-icons/lu";
import styles from "@/style"


const CallToAction = () => {
    return (
        <section className={`${styles.paddingY} font-poppins`}>
            <div className={`${styles.flexCenter} flex-col text-center tracking-tight gap-2`}>
                <h2 className={`text-[28px] sm:text-[35px] lg:text-5xl text-center font-bold md:font-semibold text-black`}>
                    ¿Listo para conseguir la tecnología que deseas?
                </h2>
                <p className="text-muted-foreground text-base">
                    Contactanos hoy mismo y comienza a ahorrar en tus compras tecnológicas.
                </p>
                <Button
                    asChild
                    className={`bg-[#18181B] hover:bg-[#18181B]/80 mt-2 font-semibold md:py-6 cursor-pointer`}
                    size={'lg'}
                >
                    <a href="/" target="_blank">
                        Contactanos por WhatsApp <LuArrowRight className="size-5" />
                    </a>
                </Button>
            </div>
        </section>
    )
}

export default CallToAction