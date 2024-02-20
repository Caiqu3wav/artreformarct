'use client';
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useState, useEffect } from "react";
import "./Navbar.css"

export default function Navbar() {
const [isActive, setIsActive] = useState(false);

    const sideList = [
        {
            title: 'HOME',
            path: '/',
        },
        {
            title: 'QUEM SOMOS',
            path: '#sobre',
        },
        {
            title: 'SERVIÇOS',
            path: '#servicos',
        },
        {
            title: 'ORÇAMENTO',
            path: '#orcamento',
        }
    ];

    const toggleMenu = () => {
        setIsActive(!isActive);
    }

    useEffect(() => {
        const handleEscKeyPress = (e) => {
            if (e.keycode === 27 && isActive) {
                setIsActive(false);
            }
        };

        if (isActive) {
            document.body.style.setProperty("overflow", "hidden");
        }else {
            document.body.style.setProperty("overflow", "auto");
        }

        document.addEventListener("keydown", handleEscKeyPress);
        
        return () => {
            document.removeEventListener("keydown", handleEscKeyPress);
        };
    }, [isActive]);

    return(
        <nav className="ml-[20%] major1:ml-[12%] majorthree:ml-[6%] majorthree1:ml-[2%]">
            <ul className="flex gap-4 text-black font-semibold majorfour:gap-0 majorfour1:hidden">
            <li className="nav_items"><a href="/">HOME</a></li>
            <li className="nav_items"><a href="#sobre">QUEM SOMOS</a></li>
            <li className="nav_items"><a href="#servicos">SERVIÇOS</a></li>
            <li className="nav_items"><a href="#orcamento">ORÇAMENTOS</a></li>
            </ul>
            <button aria-label="Open Menu" onClick={toggleMenu} className="hidden mr-6
             majorfour1:block">
                <GiHamburgerMenu size={60} className="" style={{ color: 'black' }} />
</button>

                {isActive && (
        <div className="z-10 fixed inset-0 transition-opacity">
          <div
            onClick={() => setIsActive(false)}
            className="absolute inset-0 bg-black opacity-50"
            tabIndex="0"
          ></div>
        </div>
      )}

      <aside
        className={`transform top-0 left-0 w-64 lowtwo2:w-44 lowthreetwo:w-36 text-blue-600 font-extrabold fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          isActive ? "translate-x-0" : "-translate-x-full"
        }`}
      >
         
         {sideList.map(({ title, path }, index) => (
    <Link href={path} key={index}>
        <span className="flex items-center p-4 hover:bg-blue-600 hover:text-orange-400">
          <span className="border-b-4 border-t-rose-200">{title}</span>
        </span>
    </Link>
  ))}
      </aside>
        </nav>
    )
}