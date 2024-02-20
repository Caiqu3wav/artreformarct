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
        <footer className="h-[130px] w-full flex justify-between">
            <div className="flex flex-col ml-1">
                <h1 className="text-xl text-amber-200 font-semibold">ENTRE EM CONTATO</h1>
                <div className="flex gap-1 ml-1 items-center"><MdOutlineAttachEmail className="text-amber-200"/> <p className="text-amber-200">E-Mail:</p></div>
                <div className="flex gap-1 ml-1 items-center"><FaPhoneVolume className="text-amber-200"/> <p className="text-amber-200">Telefone:</p> <p className=" text-blue-600 font-semibold">(12) 1235-4321 - (12) 9090-0093</p></div>
                <div className="flex gap-1 ml-1 items-center"><MdPlace className="text-amber-200"/> <p className="text-amber-200">Localização:</p> <p className=" text-blue-600 font-semibold"> CEP: 12523-260</p></div>
                <p className=" text-blue-600 font-semibold">AVENIDA DOS IPÊS, GUARATINGUETÁ, SP</p>
            </div>
            <div className=" flex flex-col items-center justify-center mr-28">
                <Image src={ArtRLogo2} className="w-[150px] h-[90px]" alt="logo da empresa"/>
                <p className="text-black font-semibold">Agradecemos pela preferencia!</p>
            </div>

            <div className="flex flex-col mt-2 mr-1">
                <div className="flex items-center gap-1">
                <FaInstagram className="text-purple-600" size={25}/>
                <p>/artreformasof/</p>
                </div>
                <div className="flex items-center gap-1">
                <PiWhatsappLogoDuotone className="text-green-500" size={25}/>
                <p>Nosso WhatsApp</p>
                </div>
                <p className="mt-3">(12) 99185-5821</p>
                <p>(12)98316-0902</p>
            </div>
        </footer>
    )
}