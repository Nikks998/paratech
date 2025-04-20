import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import styles from "@/style";
import Service from "./components/Service";
/* import { LuLoaderCircle } from "react-icons/lu";
import { Button } from "./components/ui/button" */
/* #0A0A0A shadcn hexa */

function App() {
  return (
    <div className="w-full bg-[#F1F5F9]" id="home">
      <div className={`${styles.flexCenter} sticky top-0 z-10 backdrop-blur-3xl border-b border-neutral-700/20 `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Service />
        </div>
      </div>

    </div>

  )
}

export default App

{/* <Button disabled>
<LuLoaderCircle className="animate-spin"/>Please wait
</Button> */}