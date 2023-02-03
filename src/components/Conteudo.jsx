import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faComputer, faGamepad, faMobileAlt, faMusic, faPersonRifle, faShirt, faSmoking } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import video from "../../public/video.jpg"


export default function Conteudo() {
    return (
        <div id='produtos' className="flex flex-col justify-center items-center w-[320px] md:w-[1000px] pb-20 bg-zinc-800">
            <h1 className='text-4xl md:text-6xl font-minhaFonte'>Nossos produtos</h1>

            <div className='mt-20 md:mt-28 flex items-center justify-center bg-second-tema-site
            h-full p-1 mb-20 md:mb-0 drop-shadow-verdeB outline-double outline-second-tema-site'>
                <FontAwesomeIcon icon={faGamepad} className='h-10' />
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 pt-10 md:border-b-2 border-second-tema-site h-72 pb-20'>
                <div>
                    <Image src={video} alt='foto dos serviços' className=" outline-double outline-second-tema-site w-72 md:w-[800px]" />
                </div>

                <div>
                    <h1 className='text-xl md:text-4xl font-minhaFonte text-center md:text-start'>
                        Video Games
                    </h1>
                    <p className='text-center md:text-start'>Lorem,
                        Temos consoles e acessórios para seu videogame, com qualidade e preço acessíveis. Controles, cabos, jogos, baterias e carregadores. Na Marcelo games, temos tudo para sua diversão.</p>
                </div>
            </div>
            <div className='mt-20 md:mt-28 flex items-center justify-center bg-second-tema-site
            h-full p-2 drop-shadow-verdeB outline-double outline-second-tema-site mb-20 md:mb-10'>
                <FontAwesomeIcon icon={faPersonRifle} className='h-10' />
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20  md:border-b-2 border-second-tema-site h-72 pb-20'>
                <div>
                    <h1 className='text-xl md:text-4xl font-minhaFonte text-center md:text-start'>
                    Air Soft
                    </h1>
                    <p className='text-center md:text-start'>Encontre tudo para Airsoft na Marcelo Games, a maior loja especializada em armas, pistolas, munições e muitos outros acessórios de Airsoft no Sul de Minas!</p>
                </div>
                <div>
                    <Image src={video} alt='foto dos serviços' className=" outline-double outline-second-tema-site w-72 md:w-[800px]" />
                </div>
            </div>
            <div className='mt-20 md:mt-28 flex items-center justify-center bg-second-tema-site
            h-full p-2 drop-shadow-verdeB outline-double outline-second-tema-site mb-20 md:mb-0'>
                <FontAwesomeIcon icon={faComputer} className='h-10' />
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center  gap-10 md:gap-20 pt-10 md:border-b-2 border-second-tema-site h-72 pb-20 '>
                <div>
                    <Image src={video} alt='foto dos serviços' className=" outline-double outline-second-tema-site w-72 md:w-[800px]" />
                </div>
                <div>
                    <h1 className='text-xl md:text-4xl font-minhaFonte text-center md:text-start'>
                    Computadores e Notebooks
                    </h1>
                    <p className='text-center md:text-start'>Venda e manutenção de computadores e notebooks de diversas marcas e modelos. Garanta sua máquina para estudos, para te ajudar na faculdade, ou até para jogar seus jogos preferidos.</p>
                </div>

            </div>
            <div className='mt-20 md:mt-28 flex items-center justify-center bg-second-tema-site
            h-full p-1 drop-shadow-verdeB outline-double outline-second-tema-site mb-20 md:mb-0'>
                <FontAwesomeIcon icon={faMobileAlt} className='h-10 ' />
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center  gap-10 md:gap-20 pt-10 md:border-b-2 border-second-tema-site h-72 pb-20'>
                <div>
                    <h1 className='text-xl md:text-4xl font-minhaFonte text-center md:text-start'>
                    Celulares e Smartphones
                    </h1>
                    <p className='text-center md:text-start'>Sabe aquela capinha personalizada para dar um toque especial no seu celular? Ou aquele fone de ouvido bluetooth para você malhar ouvindo suas músicas preferidas? Aqui tem isso e muito mais. Carregadores, acessórios, películas, tudo para cuidar ainda mais de seu aparelho no dia a dia.</p>
                </div>
                <div>
                    <Image src={video} alt='foto dos serviços' className=" outline-double outline-second-tema-site w-72 md:w-[800px]" />
                </div>
            </div>
            <div className='mt-20 md:mt-28 flex items-center justify-center bg-second-tema-site
            h-full p-1 drop-shadow-verdeB outline-double outline-second-tema-site mb-20 md:mb-0'>
                <FontAwesomeIcon icon={faMusic} className='h-10 ' />
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center  gap-10 md:gap-20 pt-10 md:border-b-2 border-second-tema-site h-72 pb-20'>
                <div>
                    <Image src={video} alt='foto dos serviços' className=" outline-double outline-second-tema-site w-72 md:w-[800px]" />
                </div>
                <div>
                    <h1 className='text-xl md:text-4xl font-minhaFonte text-center md:text-start'>
                    Caixas de Som
                    </h1>
                    <p className='text-center md:text-start'>Final de semana, churrasco em casa e não tem uma caixa de som para tocar aquela música pro pessoal? Seus problemas acabaram! Aqui na Marcelo Games, temos uma variedade de caixas de som para animar sua festa, churrasco, ou para curtir no seu dia a dia.</p>
                </div>
            </div>
            <div className='mt-20 md:mt-28 flex items-center justify-center bg-second-tema-site
            h-full p-1 drop-shadow-verdeB outline-double outline-second-tema-site mb-20 md:mb-0'>
                <FontAwesomeIcon icon={faClock} className='h-10 ' />
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center  gap-10 md:gap-20 pt-10 md:border-b-2 border-second-tema-site h-72 pb-20'>

                <div>
                    <h1 className='text-xl md:text-4xl font-minhaFonte text-center md:text-start'>
                    Relógios
                    </h1>
                    <p className='text-center md:text-start'>Um acessório indispensável para o dia a dia! Confira em nossa loja a variedade de relógios masculinos e femininos. Além de ser um acessório importante para nossa rotina, é um grande presente. Venha presentear com os relógios da Marcelo Games!</p>
                </div>
                <div>
                    <Image src={video} alt='foto dos serviços' className=" outline-double outline-second-tema-site w-72 md:w-[800px]" />
                </div>
            </div>
            <div className='mt-20 md:mt-28 flex items-center justify-center bg-second-tema-site
            h-full p-1 drop-shadow-verdeB outline-double outline-second-tema-site mb-20 md:mb-0'>
                <FontAwesomeIcon icon={faShirt} className='h-10 ' />
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center  gap-10 md:gap-20 pt-10 md:border-b-2 border-second-tema-site h-72 pb-20'>
                <div>
                    <Image src={video} alt='foto dos serviços' className=" outline-double outline-second-tema-site w-72 md:w-[800px]" />
                </div>
                <div>
                    <h1 className='text-xl md:text-4xl font-minhaFonte text-center md:text-start'>
                    Camisetas
                    </h1>
                    <p className='text-center md:text-start'>Vários modelos de camisetas masculinas e femininas, para o seu dia a dia ou para encarar uma balada. Venha conhecer nossos modelos e aproveite nossos preços especiais.</p>
                </div>
            </div>
        </div>
    )


}