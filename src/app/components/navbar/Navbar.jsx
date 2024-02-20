

export default function Navbar() {
    return(
        <nav className="ml-[20%]">
            <ul className="flex gap-4 text-black font-semibold">
            <li className="nav_items"><a href="#home">HOME</a></li>
            <li className="nav_items"><a href="#sobre">QUEM SOMOS</a></li>
            <li className="nav_items"><a href="#servicos">SERVIÇOS</a></li>
            <li className="nav_items"><a href="#">ORÇAMENTOS</a></li>
            </ul>
        </nav>
    )
}