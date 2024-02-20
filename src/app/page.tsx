import Image from "next/image";
import Header from "./components/header/Header"
import "./page.css"
import Hero from "./components/hero/Hero"

export default function Home() {
  return (
    <main className="">
      <div className="hero">
      <Header/>
      <Hero/>
      </div>
    </main>
  );
}
