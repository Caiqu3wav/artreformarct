import Image from "next/image";
import ArtRefLogo from "../../../../public/assets/img/artreflogobig.jpg"
import "./About.css"

export default function About() {
    return(
        <div className="about-cont gap-3 flex w-full flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold text-black">QUEM SOMOS?</h1>
            <Image src={ArtRefLogo} alt="lo0go da empresa" className="w-[540px] rounded-md"/>
            <p className="text-black text-2xl flex flex-col gap-0 font-semibold"><span className="text-3xl">SOMOS UMA EMPRESA ESPECIALIZADA EM:</span>
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