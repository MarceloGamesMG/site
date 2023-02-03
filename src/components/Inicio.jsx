import Image from "next/image";
import Botao from "./Botao";
import Nav from "./Nav";

import garoto from "../../public/garoto.png"

export default function Inicio() {
    return (
        <div id='inicio' className='bg-bg2 bg-cover bg-no-repeat brightness-110 w-screen border-second-tema-site drop-shadow-verde border-b-2 flex justify-center items-center  md:pt-5'>
            <div className="md:w-[1000px]">
                <Nav />
                <div className=' flex flex-col md:flex-row md:pt-20 items-center justify-center pt-5 text-center '>
                    <div className="space-y-10 md:w-[534px] md:text-start">
                        <h1 className="text-2xl text-center md:text-6xl font-bold font-minhaFonte">
                            Produtos para o seu dia a dia
                        </h1>
                        <h2 className='text-center text-xl'>
                        Loja de acessórios para celulares, computadores, armas de airsoft e chumbinho, controles para videogames e muito mais!
                        </h2>
                        <div className='flex items-center justify-center pb-20'>
                            <Botao informacao={"Conheça nossos produtos"} />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}