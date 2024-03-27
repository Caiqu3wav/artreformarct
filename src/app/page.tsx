import Image from "next/image";
import Header from "./components/header/Header"
import "./page.css"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import SectionReformas from "./components/SectionReformas/SectionReformas"
import WhatsButton from "./components/WhatsButton"
import Footer from "./components/footer/Footer"
import FormHome from "./components/formhome/FormHome"

export default function Home() {
  return (
    <main className="">
      <div className="hero overflow-x-hidden overflow-y-hidden">
      <Header/>
      <Hero/>
      <About/>
      <SectionReformas/>
        <FormHome/>
      <Footer/>
      <WhatsButton/>
      </div>
    </main>
  );
}
