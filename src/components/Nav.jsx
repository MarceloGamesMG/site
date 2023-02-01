import Link from "next/link";
import { useState } from "react";
import Botao from "./Botao";
import logo from "../../public/logo-sem-fundo.png"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
export default function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false


    return (
        <div className=" flex justify-between items-center  ">

            <nav className="drop-shadow-dark1 z-20 w-[320px]">
                <section className="MOBILE-MENU md:hidden ">
                    <div
                        className="HAMBURGER-ICON w-screen justify-between p-5 flex items-center"
                        onClick={() => setIsNavOpen((prev) => !prev
                        )} // toggle isNavOpen state on click
                    >
                        <Image src={logo} alt='logo da empresa' className='w-36 ' />
                        <div className=' space-y-2 mt-2 drop-shadow-verdeB'>
                            <span className="block h-0.5 w-8  bg-second-tema-site "></span>
                            <span className="block h-0.5 w-8 bg-second-tema-site"></span>
                            <span className="block h-0.5 w-8 bg-second-tema-site"></span>
                        </div>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"} >
                        <div
                            className="CROSS-ICON absolute top-0 right-10 "
                            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                        >
                            <svg
                                className="h-8 w-8 text-second-tema-site cursor-pointer mt-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className="MENU-LINK-MOBILE-OPEN  bg-tema-site space-y-2  text-second-tema-site font-bold flex flex-col items-center w-screen h-screen">
                            <li className="border w-72 text-center  border-second-tema-site rounded-md mt-20  text-xl">
                                <Link href="/"  onClick={() => setIsNavOpen(false)}className="font-bold block p-2">Início</Link>
                            </li>
                            <li className="border w-72 text-center border-second-tema-site rounded-md  text-xl">
                                <Link href="#sobre" onClick={() => setIsNavOpen(false)}className="font-bold block p-2">Sobre nós</Link>
                            </li>
                            <li className="border w-72 text-center  border-second-tema-site rounded-md  text-xl">
                                <Link href="#produtos" onClick={() => setIsNavOpen(false)}className="font-bold block p-2">Nossos Produtos</Link>
                            </li>
                            <li className="border w-72 text-center  border-second-tema-site rounded-md  text-xl">
                                <Link href="#baependi" className="font-bold block p-2">Baependi</Link>
                            </li>
                            
                            <li className="border w-72 text-center border-second-tema-site rounded-md text-xl">
                                <Link href="#form" className="font-bold block p-2">Contato</Link>
                            </li>
                            <div className='flex justify-center items-center gap-10'>
                                <Link href='/??' className='flex items-center justify-center bg-second-tema-site
            h- p-1 drop-shadow-verdeB outline-double outline-second-tema-site'>
                                    <FontAwesomeIcon icon={faInstagram} className='h-5 text-branco' />
                                </Link>
                                <Link href='/??' className='flex items-center justify-center bg-second-tema-site
            h- p-1 drop-shadow-verdeB outline-double outline-second-tema-site'>
                                    <FontAwesomeIcon icon={faFacebook} className='h-5 text-branco' />
                                </Link>
                            </div>
                        </ul>
                    </div>
                </section>

                <ul className="DESKTOP-MENU hidden  md:flex md:justify-between w-[1000px] md:items-center text-white font-bold items-center" >
                    <Image src={logo} alt='logo da empresa' className='w-44' />
                    <li className="flex justify-center items-center text-center">
                        <a href="#inicio" className="hover:transition hover:drop-shadow-verdeB">
                            <p className="hover:text-second-tema-site hover:font-bold  text-sm ">Início</p></a>
                    </li>
                    <li className="w-28 flex justify-center items-center text-center">
                        <a href="#sobre" className="hover:transition hover:drop-shadow-verdeB"
                        >
                            <p className="hover:text-second-tema-site hover:font-bold  hover:transition drop-shadow-dark1 text-sm">
                                Sobre nós
                            </p>
                        </a>
                    </li>
                    <li className="flex justify-center items-center text-center">
                        <a href="#produtos" className="hover:transition hover:drop-shadow-verdeB"
                        >
                            <p className="hover:text-second-tema-site hover:font-bold  hover:transition drop-shadow-dark1 text-sm">
                                Nossos Produtos
                            </p>
                        </a>
                    </li>
                    <li className="w-28 flex justify-center items-center text-center">
                        <a href="#baependi" className="hover:transition hover:drop-shadow-verdeB">
                            <p className="hover:text-second-tema-site hover:font-bold  hover:transition drop-shadow-dark1 text-sm">Baependi</p>
                        </a>
                    </li>
                     <a href='#form'>          
                    <Botao informacao={"Contato"} />
                    </a> 
                </ul>
            </nav>
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
      .nonActive {
        color: white;
      }
      .active {
       color: #1A1A1A;
       font-weight: bold;
      }
    `}</style>
        </div>
    );
}