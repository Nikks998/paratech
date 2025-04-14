import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import styles from "@/style";
/* import { LuLoaderCircle } from "react-icons/lu";
import { Button } from "./components/ui/button" */
/* #0A0A0A shadcn hexa */

function App() {
  return (
    <div className="w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      
    </div>

  )
}

export default App

{/* <Button disabled>
<LuLoaderCircle className="animate-spin"/>Please wait
</Button> */}