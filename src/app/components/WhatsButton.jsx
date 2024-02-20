import { PiWhatsappLogoDuotone } from "react-icons/pi";
import Link from "next/link";

export default function WhatsButton() {
    return(
        <button className="fixed bottom-4 right-4 rounded-full p-2 outline-none z-1000">
                <Link href="https://wa.me/1299185-5821" className="text-green-400"><PiWhatsappLogoDuotone size={70}/></Link>
        </button>
    )
}