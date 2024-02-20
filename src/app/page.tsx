import Image from "next/image";
import Header from "./components/header/Header"
import "./page.css"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import SectionReformas from "./components/SectionReformas/SectionReformas"
import WhatsButton from "./components/WhatsButton"
import Footer from "./components/footer/Footer"

export default function Home() {
  return (
    <main className="">
      <div className="hero">
      <Header/>
      <Hero/>
      <About/>
      <SectionReformas/>
      <Footer/>
      <WhatsButton/>
      </div>
    </main>
  );
}
