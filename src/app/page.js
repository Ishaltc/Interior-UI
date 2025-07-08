import Image from "next/image";
import styles from "./page.module.css";
import HomeSlider from "./components/HomeSlider";
import ProjectShowcase1 from "./components/ProjectShowcase1";
import ProjectShowcase2 from "./components/ProjectShowcase2";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div>
  <HomeSlider/>
  <ProjectShowcase1/>
  <ProjectShowcase2/>
  <Footer/>
    </div>
  );
}
