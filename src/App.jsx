import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Benefits from "./components/Benefits";
import styles from "@/style";
import CallToAction from "./components/CallToAction";
/* import { LuLoaderCircle } from "react-icons/lu";
import { Button } from "./components/ui/button" */
/* #0A0A0A shadcn hexa */

function App() {
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

    </div>

  )
}

export default App

{/* <Button disabled>
<LuLoaderCircle className="animate-spin"/>Please wait
</Button> */}