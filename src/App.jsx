import { About } from "./components/About.jsx";
import { Footer } from "./components/Footer.jsx";
import { Info } from "./components/Info.jsx";
import { Interests } from "./components/Interests.jsx";
import styles from "./soloBusinessCard.module.css";

export function App() {
  return (
    <div className={styles.soloBusinessCardContainer}>
      <div className={styles.soloBusinessCardInnerContainer}>
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}
