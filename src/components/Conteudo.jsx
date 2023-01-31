import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faComputer, faGamepad, faMobileAlt, faMobilePhone, faMusic, faPersonRifle, faShirt, faSmoking } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import video from "../../public/video.jpg"


export default function Conteudo() {
    return (
        <div className="flex flex-col justify-center items-center w-[320px] md:w-[1000px] pt-20 pb-20">
            <h1 className='text-xl md:text-6xl font-minhaFonte text-red-900'>Nossos produtos</h1>

            <div className='mt-20 md:mt-28 flex items-center justify-center bg-second-tema-site
            h-full p-1 drop-shadow-verdeB outline-double outline-second-tema-site'>
                <FontAwesomeIcon icon={faGamepad} className='h-10 ' />
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center  gap-10 md:gap-20 pt-10 md:border-b-2 border-second-tema-site h-72 pb-20'>
                <div>
                    <Image src={video} alt='foto dos serviços' className=" outline-double outline-second-tema-site" />
                </div>

                <div>
                    <h1 className='text-xl md:text-4xl font-minhaFonte'>
                        Lorem ipsum, dolor sit
                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquam nobis explicabo esse delectus incidunt molestias iste corrupti veritatis laudantium culpa odio, at excepturi? Hic dignissimos nisi enim ratione illo!</p>
                </div>
            </div>
            <div className='mt-20 md:mt-28 flex items-center justify-center bg-second-tema-site
            h-full p-2 drop-shadow-verdeB outline-double outline-second-tema-site'>
                <FontAwesomeIcon icon={faPersonRifle} className='h-10' />
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20  md:border-b-2 border-second-tema-site h-72 pb-20'>
                <div>
                    <h1 className='text-xl md:text-4xl font-minhaFonte'>
                        Lorem ipsum, dolor sit
                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquam nobis explicabo esse delectus incidunt molestias iste corrupti veritatis laudantium culpa odio, at excepturi? Hic dignissimos nisi enim ratione illo!</p>
                </div>
                <div>
                    <Image src={video} alt='foto dos serviços' className=" outline-double outline-second-tema-site" />
                </div>
            </div>
            <div className='mt-20 md:mt-28 flex items-center justify-center bg-second-tema-site
            h-full p-2 drop-shadow-verdeB outline-double outline-second-tema-site'>
                <FontAwesomeIcon icon={faComputer} className='h-10' />
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center  gap-10 md:gap-20 pt-10 md:border-b-2 border-second-tema-site h-72 pb-20'>
                <div>
                    <Image src={video} alt='foto dos serviços' className=" outline-double outline-second-tema-site" />
                </div>
                <div>
                    <h1 className='text-xl md:text-4xl font-minhaFonte'>
                        Lorem ipsum, dolor sit
                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquam nobis explicabo esse delectus incidunt molestias iste corrupti veritatis laudantium culpa odio, at excepturi? Hic dignissimos nisi enim ratione illo!</p>
                </div>

            </div>
            <div className='mt-20 md:mt-28 flex items-center justify-center bg-second-tema-site
            h-full p-1 drop-shadow-verdeB outline-double outline-second-tema-site'>
                <FontAwesomeIcon icon={faMobileAlt} className='h-10 ' />
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center  gap-10 md:gap-20 pt-10 md:border-b-2 border-second-tema-site h-72 pb-20'>
                <div>
                    <h1 className='text-xl md:text-4xl font-minhaFonte'>
                        Lorem ipsum, dolor sit
                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquam nobis explicabo esse delectus incidunt molestias iste corrupti veritatis laudantium culpa odio, at excepturi? Hic dignissimos nisi enim ratione illo!</p>
                </div>
                <div>
                    <Image src={video} alt='foto dos serviços' className=" outline-double outline-second-tema-site" />
                </div>
            </div>
            <div className='mt-20 md:mt-28 flex items-center justify-center bg-second-tema-site
            h-full p-1 drop-shadow-verdeB outline-double outline-second-tema-site'>
                <FontAwesomeIcon icon={faMusic} className='h-10 ' />
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center  gap-10 md:gap-20 pt-10 md:border-b-2 border-second-tema-site h-72 pb-20'>
                <div>
                    <Image src={video} alt='foto dos serviços' className=" outline-double outline-second-tema-site" />
                </div>
                <div>
                    <h1 className='text-xl md:text-4xl font-minhaFonte'>
                        Lorem ipsum, dolor sit
                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquam nobis explicabo esse delectus incidunt molestias iste corrupti veritatis laudantium culpa odio, at excepturi? Hic dignissimos nisi enim ratione illo!</p>
                </div>
            </div>
            <div className='mt-20 md:mt-28 flex items-center justify-center bg-second-tema-site
            h-full p-1 drop-shadow-verdeB outline-double outline-second-tema-site'>
                <FontAwesomeIcon icon={faClock} className='h-10 ' />
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center  gap-10 md:gap-20 pt-10 md:border-b-2 border-second-tema-site h-72 pb-20'>

                <div>
                    <h1 className='text-xl md:text-4xl font-minhaFonte'>
                        Lorem ipsum, dolor sit
                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquam nobis explicabo esse delectus incidunt molestias iste corrupti veritatis laudantium culpa odio, at excepturi? Hic dignissimos nisi enim ratione illo!</p>
                </div>
                <div>
                    <Image src={video} alt='foto dos serviços' className=" outline-double outline-second-tema-site" />
                </div>
            </div>
            <div className='mt-20 md:mt-28 flex items-center justify-center bg-second-tema-site
            h-full p-1 drop-shadow-verdeB outline-double outline-second-tema-site'>
                <FontAwesomeIcon icon={faShirt} className='h-10 ' />
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center  gap-10 md:gap-20 pt-10 md:border-b-2 border-second-tema-site h-72 pb-20'>
                <div>
                    <Image src={video} alt='foto dos serviços' className=" outline-double outline-second-tema-site" />
                </div>
                <div>
                    <h1 className='text-xl md:text-4xl font-minhaFonte'>
                        Lorem ipsum, dolor sit
                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquam nobis explicabo esse delectus incidunt molestias iste corrupti veritatis laudantium culpa odio, at excepturi? Hic dignissimos nisi enim ratione illo!</p>
                </div>

            </div>
            <div className='mt-20 md:mt-28 flex items-center justify-center bg-second-tema-site
            h-full p-1 drop-shadow-verdeB outline-double outline-second-tema-site '>
                <FontAwesomeIcon icon={faSmoking} className='h-10 ' />
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center  gap-10 md:gap-20 pt-10 h-72 pb-20'>

                <div>
                    <h1 className='text-xl md:text-4xl font-minhaFonte'>
                        Lorem ipsum, dolor sit
                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquam nobis explicabo esse delectus incidunt molestias iste corrupti veritatis laudantium culpa odio, at excepturi? Hic dignissimos nisi enim ratione illo!</p>
                </div>
                <div>
                    <Image src={video} alt='foto dos serviços' className=" outline-double outline-second-tema-site" />
                </div>

            </div>
        </div>
    )


}