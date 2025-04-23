import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Benefits from "./components/Benefits";
import CallToAction from "./components/CallToAction";
import styles from "@/style";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
/* import { LuLoaderCircle } from "react-icons/lu";
import { Button } from "./components/ui/button" */
/* #0A0A0A shadcn hexa */

function App() {

  useEffect(() => {
    AOS.init()
  })

  return (
    <div className="w-full bg-[#f4f4f5]" id="home">
      <div className={`${styles.flexCenter} sticky top-0 z-10 backdrop-blur-3xl border-b border-neutral-700/20`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart} ${styles.paddingX} bg-white`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Service />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} bg-white`}>
        <div className={`${styles.boxWidth}`}>
          <Benefits />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <CallToAction />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} bg-white`}>
        <div className={`${styles.boxWidth}`}>
          <footer className={`${styles.paddingY} ${styles.flexCenter} flex-col lg:flex-row lg:justify-between font-poppins gap-4`}>
            <div className="">
              <p className="text-center text-base md:text-lg">
                © {new Date().getFullYear()} Para<span className="text-primary">Tech</span>. Todos los derechos reservados. By <a href="#" className="underline underline-offset-4">Nik</a>
              </p>
            </div>
            <div className="flex gap-4 text-sm md:text-base">
              <a href="#" className="underline underline-offset-4">Términos</a>
              <a href="#" className="underline underline-offset-4">Privacidad</a>
            </div>
          </footer>
        </div>
      </div>

    </div>

  )
}

export default App

{/* <Button disabled>
<LuLoaderCircle className="animate-spin"/>Please wait
</Button> */}