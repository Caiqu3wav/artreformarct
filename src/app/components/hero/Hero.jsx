import Image from "next/image";
import ArtRLogo2 from "../../../../public/assets/img/art&reformalogo2.png"
import Carousel from "../carousel/Carousel"

export default function Hero() {
    return(
        <div className="flex flex-col items-center justify-center h-[550px]">
            <Image src={ArtRLogo2} className="w-[300px]" alt="logo da empresa"/>
            <hr className=" border-solid border-y-2 border-black w-full" />
            <Carousel/>
        </div>
    )
}