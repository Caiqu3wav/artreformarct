'use client';
import Image from "next/image";
import ArtRefLogo from "../../../../public/assets/img/artreflogobig.jpg";
import "./About.css";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export default function About() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let mm = gsap.matchMedia(), breakPoint = 700;

        mm.add(
          {
            isDesktop: `(min-width: ${breakPoint}px)`,
            isMobile: `(max-width: ${breakPoint - 1}px)`,
            isPad: `(min-height: ${breakPoint - 1}px)`
          },
          (context) => {
          let { isDesktop, isMobile, isPad } = context.conditions;
          

        gsap.to(".about-cont-h1", {
            opacity: 1,
            scrollTrigger:{
                trigger: "#sobre",
                endTrigger: "#servicos",
                start:  "top 300px",
                end: "top 650px",
                scrub: true,
           }
        })

        gsap.to(".about-cont-img", {
            x: 0,
            opacity: 1,
            scrollTrigger:{
                trigger: "#sobre",
                endTrigger: "#servicos",
                start: isDesktop ? "top 750px": "top 900px",
                end: isDesktop ? "top 950px" : "top 1100px",
                scrub: true,
            }
        })

        gsap.to(".about-texts", {
            x: 0,
            opacity: 1,
            scrollTrigger:{
                trigger: "#sobre",
                endTrigger: "#servicos",
                start: isDesktop ? "top 500px" : "top 750px",
                end: isDesktop ? "top 750px" : "top 900px",
                scrub: true,
            }
        })
        })
    })
    return(
        <div id="sobre" className="gap-3 flex w-full h-fit flex-col items-center justify-center">
            <h1 className="about-cont-h1 opacity-0 text-4xl font-semibold text-black">QUEM SOMOS?</h1>
            <Image src={ArtRefLogo} alt="l0go da empresa" className="w-[540px] about-cont-img translate-x-[600px] opacity-0 rounded-md midtw1:w-[480px] midtwo3:w-[70%]"/>
            <p className="text-black about-texts -translate-x-[500px] text-2xl flex flex-col gap-0 font-semibold"><span className="text-3xl">SOMOS UMA EMPRESA ESPECIALIZADA EM:</span>
<span className="text-center self-center">PIAS/LAVATÓRIOS <br />
NICHOS <br />
TAMPOS/BALCÕES <br />
INSTALAÇÃO DE REVESTIMENTOS E PORCELANATO <br />
REFORMAS DE BANHEIRO E COZINHAS</span> </p>
<p className="text-black text-xl border-b-4 border-solid border-gray-500 rounded-md">Nosso foco é na qualidade 
dos serviços e em soluções únicas para cada projeto.</p>
        </div>
    );
}