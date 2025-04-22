import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";
import styles from '@/style'

const data = [
    {
        id: 1,
        icon: IoMdCheckmarkCircleOutline,
        title: "Ahorro significativo",
        description: "Aprovecha los precios mas bajos de Paraguay sin viajar"
    },
    {
        id: 2,
        icon: IoMdCheckmarkCircleOutline,
        title: "Productos originales",
        description: "Garantizamos la autenticidad de todos los productos."
    },
    {
        id: 3,
        icon: IoMdCheckmarkCircleOutline,
        title: "Proceso transparente",
        description: "Te mantenemos informado en cada paso del proceso."
    }
]

const Benefits = () => {
    return (
        <section className={`${styles.paddingY} font-poppins`}>
            <div className={`${styles.flexStart} lg:items-center flex-col`}>
                <h2 className={`text-[28px] sm:text-[35px] lg:text-5xl text-center font-bold md:font-semibold text-black`}>
                    ¿Por qué elegir nuestro servicio?
                </h2>
                <ul className="flex flex-col gap-8 py-8 w-full">
                    {
                        data.map((data) => {
                            const Icon = data.icon
                            return (
                                <li className="flex items-start gap-2 border border-slate-300 rounded-sm p-4">
                                    <Icon className="size-[24px] mt-1" />
                                    <div>
                                        <h3 className="font-medium text-xl">
                                            {data.title}
                                        </h3>
                                        <p className="text-muted-foreground text-base">
                                            {data.description}
                                        </p>
                                    </div>
                                </li>
                            )
                        }
                        )
                    }
                </ul>
                <Button
                    className={`font-semibold bg-[#18181B] hover:bg-[#18181B]/80 md:py-6 cursor-pointer`}>
                    Contactanos ahora <FaWhatsapp />
                </Button>
            </div>
        </section>
    )
}

export default Benefits