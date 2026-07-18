import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import AboutMe from "@/app/components/About";

import dynamic from "next/dynamic";

const Services = dynamic(() => import("@/app/components/Services"));
const Projects = dynamic(() => import("@/app/components/Projects"));
const Contact = dynamic(() => import("@/app/components/Contact"));
import Footer from "@/app/components/Footer";

const Home = () => {
    return (
        <main>
          <Header />
          <HeroSection />
          <AboutMe />
          <Services />
          <Projects />
          <Contact />
          <Footer />
        </main>
    )
}
export default Home
