import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faComputer, faGamepad, faMobileAlt, faMusic, faPersonRifle, faShirt, faSmoking } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import video from "../../public/video.jpg"
import air from "../../public/air.jpeg"
import computador from "../../public/computador.jpeg"
import caixaSon from "../../public/caixaSon.jpeg"
import celular from "../../public/celular.jpeg"
import camisa from "../../public/camisa.jpeg"
import relogio from "../../public/relogio.jpeg"


export default function Conteudo() {
    return (
        <div id='produtos' className="flex flex-col justify-center items-center w-[320px] md:w-[1000px] pb-20 ">
            <h1 className='text-4xl md:text-6xl font-minhaFonte'>Nossos produtos</h1>


            <div className='flex flex-col justify-center items-center gap-10 md:gap-20 pt-10'>

                <div className=' md:mt-10 flex items-center justify-center bg-second-tema-site
             p-1 drop-shadow-verdeB outline-double outline-second-tema-site'>
                    <FontAwesomeIcon icon={faGamepad} className='h-10' />
                </div>
                <div className="flex flex-col md:flex-row gap-20 border-b-2 border-second-tema-site md:h-72 pb-20 pt-20 md:pb-44 md:w-[1000px] px-5 justify-center items-center">
                    <div className='md:w-[800px] flex justify-center items-center'>
                        <Image src={video} alt='foto dos serviços' className=" outline-double outline-second-tema-site w-96 h-60" />
                    </div>
                    <div className='flex w-1/2 flex-col justify-center items-center'>
                        <h1 className='text-xl md:text-4xl font-minhaFonte text-center md:text-start'>
                            Video Games
                        </h1>
                        <p className='w-[320px] md:w-[400px] h-full text-center md:text-start'>
                            Temos consoles e acessórios para seu videogame, com qualidade e preço acessíveis. Controles, cabos, jogos, baterias e carregadores. Na Marcelo games, temos tudo para sua diversão.</p>
                    </div>
                </div>

                <div className=' md:mt-10 flex items-center justify-center bg-second-tema-site
             p-1 drop-shadow-verdeB outline-double outline-second-tema-site'>
                    <FontAwesomeIcon icon={faPersonRifle} className='h-10' />
                </div>
                <div className="flex flex-col md:flex-row gap-20 border-b-2 border-second-tema-site md:h-72 pb-20 pt-20 md:pb-44 md:w-[1000px] px-5 justify-center items-center">

                    <div className='flex w-1/2 flex-col justify-center items-center'>
                        <h1 className='text-xl md:text-4xl font-minhaFonte text-center md:text-start'>
                            Air Soft
                        </h1>
                        <p className='w-[320px] md:w-[400px] h-full text-center md:text-start'>
                            Encontre tudo para Airsoft na Marcelo Games, a maior loja especializada em armas, pistolas, munições e muitos outros acessórios de Airsoft no Sul de Minas!</p>
                    </div>
                    <div className='md:w-[800px] flex justify-center items-center'>
                        <Image src={air} alt='foto dos serviços' className=" outline-double outline-second-tema-site w-96 h-60" />
                    </div>
                </div>

                <div className=' md:mt-10 flex items-center justify-center bg-second-tema-site
             p-1 drop-shadow-verdeB outline-double outline-second-tema-site'>
                    <FontAwesomeIcon icon={faComputer} className='h-10' />
                </div>
                <div className="flex flex-col md:flex-row gap-20 border-b-2 border-second-tema-site md:h-72 pb-20 pt-20 md:pb-44 md:w-[1000px] px-5 justify-center items-center">
                    <div className='md:w-[800px] flex justify-center items-center'>
                        <Image src={computador} alt='foto dos serviços' className=" outline-double outline-second-tema-site w-96 h-60" />
                    </div>
                    <div className='flex w-1/2 flex-col justify-center items-center'>
                        <h1 className='text-xl md:text-4xl font-minhaFonte text-center md:text-start'>
                            Computadores e Notebooks
                        </h1>
                        <p className='w-[320px] md:w-[400px] h-full text-center md:text-start'>
                            Venda e manutenção de computadores e notebooks de diversas marcas e modelos. Garanta sua máquina para estudos, para te ajudar na faculdade, ou até para jogar seus jogos preferidos.
                        </p>
                    </div>
                </div>

                <div className=' md:mt-10 flex items-center justify-center bg-second-tema-site
             p-1 drop-shadow-verdeB outline-double outline-second-tema-site'>
                    <FontAwesomeIcon icon={faMobileAlt} className='h-10' />
                </div>
                <div className="flex flex-col md:flex-row gap-20 border-b-2 border-second-tema-site md:h-72 pb-20 pt-20 md:pb-44 md:w-[1000px] px-5 justify-center items-center">

                    <div className='flex w-1/2 flex-col justify-center items-center'>
                        <h1 className='text-xl md:text-4xl font-minhaFonte text-center md:text-start'>
                            Celulares e Smartphones
                        </h1>
                        <p className='w-[320px] md:w-[400px] h-full text-center md:text-start'>
                            Sabe aquela capinha personalizada para dar um toque especial no seu celular? Ou aquele fone de ouvido bluetooth para você malhar ouvindo suas músicas preferidas? Aqui tem isso e muito mais. Carregadores, acessórios, películas, tudo para cuidar ainda mais de seu aparelho no dia a dia.
                        </p>
                    </div>
                    <div className='md:w-[800px] flex justify-center items-center'>
                        <Image src={celular} alt='foto dos serviços' className=" outline-double outline-second-tema-site w-96 h-60" />
                    </div>
                </div>

                <div className=' md:mt-10 flex items-center justify-center bg-second-tema-site
             p-1 drop-shadow-verdeB outline-double outline-second-tema-site'>
                    <FontAwesomeIcon icon={faMusic} className='h-10' />
                </div>
                <div className="flex flex-col md:flex-row gap-20 border-b-2 border-second-tema-site md:h-72 pb-20 pt-20 md:pb-44 md:w-[1000px] px-5 justify-center items-center">
                    <div className='md:w-[800px] flex justify-center items-center'>
                        <Image src={caixaSon} alt='foto dos serviços' className=" outline-double outline-second-tema-site w-96 h-60" />
                    </div>
                    <div className='flex w-1/2 flex-col justify-center items-center'>
                        <h1 className='text-xl md:text-4xl font-minhaFonte text-center md:text-start'>
                            Caixas de Som
                        </h1>
                        <p className='w-[320px] md:w-[400px] h-full text-center md:text-start'>
                            Final de semana, churrasco em casa e não tem uma caixa de som para tocar aquela música pro pessoal? Seus problemas acabaram! Aqui na Marcelo Games, temos uma variedade de caixas de som para animar sua festa, churrasco, ou para curtir no seu dia a dia
                        </p>
                    </div>
                </div>

                <div className=' md:mt-10 flex items-center justify-center bg-second-tema-site
             p-1 drop-shadow-verdeB outline-double outline-second-tema-site'>
                    <FontAwesomeIcon icon={faClock} className='h-10' />
                </div>
                <div className="flex flex-col md:flex-row gap-20 border-b-2 border-second-tema-site md:h-72 pb-20 pt-20 md:pb-44 md:w-[1000px] px-5 justify-center items-center">

                    <div className='flex w-1/2 flex-col justify-center items-center'>
                        <h1 className='text-xl md:text-4xl font-minhaFonte text-center md:text-start'>
                            Relógios
                        </h1>
                        <p className='w-[320px] md:w-[400px] h-full text-center md:text-start'>
                            Um acessório indispensável para o dia a dia! Confira em nossa loja a variedade de relógios masculinos e femininos. Além de ser um acessório importante para nossa rotina, é um grande presente. Venha presentear com os relógios da Marcelo Games!
                        </p>
                    </div>
                    <div className='md:w-[800px] flex justify-center items-center'>
                        <Image src={relogio} alt='foto dos serviços' className=" outline-double outline-second-tema-site w-96 h-60" />
                    </div>
                </div>

                <div className=' md:mt-10 flex items-center justify-center bg-second-tema-site
             p-1 drop-shadow-verdeB outline-double outline-second-tema-site'>
                    <FontAwesomeIcon icon={faShirt} className='h-10' />
                </div>
                <div className="flex flex-col md:flex-row gap-20 border-b-2 border-second-tema-site md:h-72 pb-20 pt-20 md:pb-44 md:w-[1000px] px-5 justify-center items-center">
                    <div className='md:w-[800px] flex justify-center items-center'>
                        <Image src={camisa} alt='foto dos serviços' className=" outline-double outline-second-tema-site w-96 h-60" />
                    </div>
                    <div className='flex w-1/2 flex-col justify-center items-center'>
                        <h1 className='text-xl md:text-4xl font-minhaFonte text-center md:text-start'>
                            Camisetas
                        </h1>
                        <p className='w-[320px] md:w-[400px] h-full text-center md:text-start'>
                            Vários modelos de camisetas masculinas e femininas, para o seu dia a dia ou para encarar uma balada. Venha conhecer nossos modelos e aproveite nossos preços especiais.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}