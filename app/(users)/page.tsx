import AboutMyself from "../Components/AboutMeyself";
import ContactMe from "../Components/ContactMe";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Skills from "../Components/SkillsSection";
export default function Home() {
  return (
     <>
     <Hero/>
     <Skills/>
     <Projects/>
     <AboutMyself/>
     <ContactMe/>
     <Footer/>
     </>
  )
}
