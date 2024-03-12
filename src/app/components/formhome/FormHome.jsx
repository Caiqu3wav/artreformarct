import Link from "next/link"
import "./FormHome.css"

export default function FormHome() {
    return(
        <div id="orcamento" className="flex items-center justify-center w-full pb-4">
            <div className="form-container flex flex-col bg-gray-500 bg-opacity-40 rounded-lg h-[300px] w-[600px] midtw:w-[400px] low:w-[340px]  items-center justify-center gap-5">
            <h1 className=" font-light text-2xl text-gray-500">FALE CONOSCO</h1>
            <h2 className=" text-blue-800 text-2xl text-center font-semibold">Você pode solicitar o orçamento diretamente por aqui e entraremos em contato com a resposta!</h2>
            <Link href="/sendemail"><button className=" bg-orange-300 text-black py-4 px-4 rounded-xl">FAÇA SEU ORÇAMENTO</button></Link>
            </div>
        </div>
    )
}