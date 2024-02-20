import Image from "next/image";
import ArtRLogo2 from "../../../../public/assets/img/art&reformalogo2.png"
import Carousel from "../carousel/Carousel"
import "./Hero.css"
import HeroImage1 from "../../../../public/assets/img/imagens home/Sonhar-com-reforma.jpg";
import HeroImage2 from "../../../../public/assets/img/imagens home/acabamento.png";
import HeroImage3 from "../../../../public/assets/img/imagens home/plantas-de-casas-em-projetos-de-arquitetura.jpg";

export default function Hero() {
    return(
        <div className="hero-container flex flex-col items-center justify-center gap-0">
            <div className="h-[200px] w-full flex flex-col mt-[100px] items-center justify-center">
            <Image src={ArtRLogo2} className="w-[250px]" alt="logo da empresa"/>
            <hr className=" border-solid border-y-2 border-black w-full" />
            </div>
            <Carousel/>
            <div className="flex w-full flex-col items-center justify-center">
                <h1 className="text-black text-3xl">Que tipo de reforma você procura?</h1>
                <hr className=" border-solid border-y-4 border-black w-full" />
                <div className="flex w-full justify-evenly mt-4">
                    <div className="flex flex-col items-center justify-center text-center">
                    <Image src={HeroImage1} alt="pedreiro" className="w-[170px] shadow-md shadow-black"/>
                    <p className="text-black font-bold">Reformas</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                    <Image src={HeroImage2} alt="acabamento" className="w-[170px] shadow-md shadow-black"/>
                    <p className="text-black font-bold">Acabamento</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                    <Image src={HeroImage3} alt="planta de casa" className="w-[170px] shadow-md shadow-black"/>
                    <p className="text-black font-bold">Projetos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}