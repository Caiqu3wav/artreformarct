import { MdOutlineAttachEmail } from "react-icons/md";
import "./Footer.css";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdPlace } from "react-icons/md";
import ArtRLogo2 from "../../../../public/assets/img/art&reformalogo2.png";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { PiWhatsappLogoDuotone } from "react-icons/pi";

export default function Footer(){
    return(
        <footer className="h-[130px] w-full flex justify-between midtw:h-fit">
            <div className="flex flex-col ml-1">
                <h1 className="text-xl text-amber-200 font-semibold">ENTRE EM CONTATO</h1>
                <div className="flex gap-1 ml-1 items-center"><MdOutlineAttachEmail className="text-amber-200"/> <p className="text-amber-200">E-Mail:</p></div>
                <div className="flex gap-1 ml-1 items-center midtwo2:items-start"><FaPhoneVolume className="text-amber-200"/> <div className="flex midtwo2:flex-col">
                    <p className="text-amber-200">Telefone:</p> <p className="p_infos1 text-blue-600 font-semibold midtwo4:relative
                     midtwo4:right-4">(12) 1235-4321 - (12) 9090-0093</p></div></div>
                <div className="flex gap-1 ml-1 items-center midtwo2:items-start"><MdPlace className="text-amber-200"/> <div className="flex midtwo2:flex-col">
                    <p className="text-amber-200">Localização:</p> <p className="p_infos1 text-blue-600 font-semibold"> CEP: 12523-260</p></div></div>
                <p className="p_infos1 text-blue-600 font-semibold">AVENIDA DOS IPÊS, GUARATINGUETÁ, SP</p>
            </div>
            <div className=" flex flex-col items-center justify-center mr-36 majortwo3:mr-24 majorthree:mr-10 majorfour1:mr-4">
                <Image src={ArtRLogo2} className="w-[150px] h-[90px]" alt="logo da empresa"/>
                <p className="text-black font-semibold midtw:text-center">Agradecemos pela preferencia!</p>
            </div>

            <div className="flex flex-col mt-2 mr-1">
                <div className="flex items-center gap-1">
                <FaInstagram className="text-purple-500" size={25}/>
                <p className="p_infos2">/artreformasof/</p>
                </div>
                <div className="flex items-center gap-1">
                <PiWhatsappLogoDuotone className="text-green-500" size={25}/>
                <p className="p_infos2">Nosso WhatsApp</p>
                </div>
                <p className="mt-3 p_infos2">(12) 99185-5821</p>
                <p className="p_infos2">(12)98316-0902</p>
            </div>
        </footer>
    )
}