import { FiSmartphone, FiTruck } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import styles from "@/style";


const cardsData = [
    {
        id: 1,
        icon: FiSmartphone,
        title: "Pedido",
        description: "El cliente nos dice qué producto quiere vía WhatsApp o llamada. Te asesoramos sobre precios y opciones disponibles"
    },
    {
        id: 2,
        icon: BsBoxSeam,
        title: "Compra",
        description: "Nosotros lo compramos en Paraguay y lo traemos. Nos encargamos de todo el proceso logístico para tu comodidad"
    },
    {
        id: 3,
        icon: FiTruck,
        title: "Entrega",
        description: "Entregamos el producto en Buenos Aires y cobramos una comisión. Garantizamos la calidad y originalidad del producto"
    }
]

const Service = () => {
    return (
        <section className={`flex flex-col ${styles.paddingY} font-poppins`} id="servicios">
            <div className={`${styles.flexCenter} flex-col text-center`}>
                <h2 className={`text-[28px] sm:text-[35px] lg:text-5xl font-bold md:font-semibold tracking-tighter text-black`}>
                    ¿Cómo funciona nuestro servicio?
                </h2>
                <p className={`text-muted-foreground mt-2 ${styles.paragraph} tracking-tighter`}>
                    Un proceso simple y transparente para que obtengas la tecnología que deseas al mejor precio
                </p>
            </div>
            <div className={`lg:flex gap-4 lg:py-12`}>
                {
                    cardsData.map((data) => {
                        const Icon = data.icon
                        return (
                            <div className={`py-5 flex flex-col gap-5 hover:scale-105 duration-300`} key={data.id}>
                                <div className="w-full h-full bg-white rounded-sm border border-slate-300">
                                    <div className="flex flex-col p-6 pb-2">
                                        <div className={`${styles.flexCenter} size-12 bg-black/10 rounded-full mb-4`}>
                                            <Icon className="size-[24px]" /> { }
                                        </div>
                                        <h3 className="font-semibold text-xl mt-[6px]">
                                            {data.id}. {data.title}
                                        </h3>
                                    </div>
                                    <div className="p-6 pt-0">
                                        <p className="text-muted-foreground tracking-tighter">
                                            {data.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </section>
    )
}

export default Service