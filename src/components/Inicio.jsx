import Image from "next/image";
import Botao from "./Botao";
import Nav from "./Nav";

import ellie from "../../public/ellie.jpeg"

export default function Inicio() {
    return (
        <div className='bg-bg2 bg-cover bg-no-repeat brightness-110 w-screen border-second-tema-site drop-shadow-verde border-b-2 flex justify-center items-center  md:pt-5'>
            <div className="md:w-[1000px]">
                <Nav />
                <div className='flex flex-col md:flex-row md:pt-20 items-center justify-center gap-20 pt-5 pb-16 text-center '>
                    <div className="space-y-10 md:w-[534px] md:text-start">
                        <h1 className="text-2xl md:text-6xl font-bold font-minhaFonte">
                            Lorem ipsum dolor sit.
                        </h1>
                        <h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, facilis consequatur nesciunt expedita, quos distinctio
                        </h2>
                        <div className='flex items-center justify-center'>
                        <Botao informacao={"Ler mais"} />
                        </div>
                    </div>
                    <div>
                        <Image src={ellie} alt='logo da empresa' className="bg-text-tema-site outline-double outline-second-tema-site w-44 -mt-10 md:w-96" />
                    </div>
                </div>
            </div>
        </div>
    )
}