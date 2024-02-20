'use client';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageReforma1 from "../../../../public/assets/img/iloveimg-resized2/imagemreforma1.jpg";
import ImageReforma2 from "../../../../public/assets/img/iloveimg-resized/imagemreforma2.jpeg"
import ImageReforma3 from "../../../../public/assets/img/iloveimg-resized/imagemreforma3.jpeg"
import ImageReforma4 from "../../../../public/assets/img/iloveimg-resized/imagemreforma4.jpeg"
import ImageReforma5 from "../../../../public/assets/img/iloveimg-resized2/imagemreforma5.jpg"
import Image from "next/image";
import "./Carousel.css"

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
    };
    
    return(
        <div className="carousel-container">
        <Slider {...settings}>
            <div className="imgs-cont flex items-center justify-center">
            <Image src={ImageReforma1} alt="" className="w-[50%]" />
            </div>
            <div className="imgs-cont flex items-center justify-center">
                <Image src={ImageReforma2} alt="" className="w-[50%]" />
            </div>
            <div className="imgs-cont flex items-center justify-center">
                <Image src={ImageReforma3} alt="" className="w-[50%]" />
            </div>
            <div className="imgs-cont flex items-center justify-center">
                <Image src={ImageReforma4} alt="" className="w-[50%]" />
            </div>
            <div className="imgs-cont flex items-center justify-center">
                <Image src={ImageReforma5} alt="" className="w-[50%]" />
            </div>
        </Slider>
        </div>
    )
}

export default Carousel;