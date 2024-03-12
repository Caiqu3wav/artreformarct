import Image from "next/image";
import Amostra1 from "../../../../public/assets/img/s3imagem1.png";
import Amostra2 from "../../../../public/assets/img/s3imagem2.png";
import Amostra3 from "../../../../public/assets/img/s3imagem3.png";
import Amostra4 from "../../../../public/assets/img/s3imagem4.png";
import Amostra5 from "../../../../public/assets/img/s3imagem5.png";
import Amostra6 from "../../../../public/assets/img/s3imagem6.png";


export default function SectionReformas() {
    return(
        <div id="servicos" className="flex w-full flex-col pb-6">
            <div className="w-[420px] ml-12 mt-4 midtwo3:w-fit">
            <h1 className="text-4xl text-gray-500 font-bold list-item midtwo3:text-2xl">Reformas de ambiente</h1>
            <hr className="border-solid border-y-orange-300 border-y-4 rounded-full" />
            </div>
            <div className="flex w-full justify-evenly mt-4">
                <div className="flex flex-col w-[270px] majorthree:w-[30%]">
                <Image src={Amostra1} className="w-[270px] h-[220px] majorthree:w-[100%] majorthree:h-auto" alt="amostra de reforma"/>
                <h1 className="font-bold text-black text-xl">Reforma de banheiro</h1>
                <p className="text-black">Temos equipe qualificada para
reformar todo e qualquer tipo
de banheiro. Todos os padrões.
Confira...</p>
                </div>
                <div className="flex flex-col w-[270px] majorthree:w-[30%]">
                <Image src={Amostra2} className="w-[270px] h-[220px] majorthree:w-[100%] majorthree:h-auto" alt="amostra de reforma"/>
                <h1 className="font-bold text-black text-xl">Reforma de cozinha</h1>
                <p className="text-black">Tudo que você precisa saber
a respeito da da reforma de
sua cozinha. Confira!...</p>
                </div>
                <div className="flex flex-col w-[270px] majorthree:w-[30%]">
                <Image src={Amostra3} className="w-[270px] h-[220px] majorthree:w-[100%] majorthree:h-auto" alt="amostra de reforma"/>
                <h1 className="font-bold text-black text-xl">Reforma de sala</h1>
                <p className="text-black">Reforme sua Sala sem
complicações. Agora você ira ver
alguns de nossos trabalhos.
Confira...</p>
                </div>
            </div>

            <div className="w-[440px] ml-12 mt-4 midtwo3:w-fit">
            <h1 className="text-4xl text-gray-500 font-bold list-item midtwo3:text-2xl">Reforma de acabamento</h1>
            <hr className="border-solid border-y-orange-300 border-y-4 rounded-full" />
            </div>
            <div className="flex w-full justify-evenly mt-4">
                <div className="flex flex-col w-[270px] majorthree:w-[30%]">
                <Image src={Amostra4} className="w-[270px] h-[220px] majorthree:w-[100%] majorthree:h-auto" alt="amostra de reforma"/>
                <h1 className="font-bold text-black text-xl">Pintura</h1>
                <p className="text-black">Pintura residencial, comercial,
industrial e especiais. Para
entrega de imóvel, reformas ou
novas. Confira!...</p>
                </div>
                <div className="flex flex-col w-[270px] majorthree:w-[30%]">
                <Image src={Amostra5} className="w-[270px] h-[220px] majorthree:w-[100%] majorthree:h-auto" alt="amostra de reforma"/>
                <h1 className="font-bold text-black text-xl midfour:text-lg low:text-base">Pisos e Revestimentos</h1>
                <p className="text-black">Instalação e Assentamento de
Pisos e Revestimentos.
Porcelanato, Madeira carpete...
Confira!</p>
                </div>
                <div className="flex flex-col w-[270px] majorthree:w-[30%]">
                <Image src={Amostra6} className="w-[270px] h-[220px] majorthree:w-[100%] majorthree:h-auto" alt="amostra de reforma"/>
                <h1 className="font-bold text-black text-xl">Reforma de Marmoraria</h1>
                <p className="text-black">Reforma com Mármore sem
complicações. Confira os
trabalhos referência...</p>
                </div>
            </div>
        </div>
    );
}