import ArtRLogo from "../../../../public/assets/img/art&reformalogo.png";
import Image from "next/image";
import Navbar from "../navbar/Navbar";
import "./Header.css"

export default function Header(){
    return(
        <header className="header flex items-center majorfour1:justify-between fixed w-full h-[130px]">
        <Image src={ArtRLogo} alt="logo art & reforma" className="w-[160px]"/>
        <Navbar/>
        </header>
    )
}