import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";


export default function Formulario() {

    return (
        <div id='form' className='flex flex-col justify-center items-center w-screen pb-20'>
            <h1 className='text-4xl md:text-6xl font-minhaFonte '>Como chegar</h1>
            <div className='flex flex-col  justify-center items-center pt-20'>

                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14801.659052887257!2d-44.8887302!3d-21.9570391!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf252c24f3303d082!2sMarcelo%20Games!5e0!3m2!1spt-BR!2sbr!4v1675190839925!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy " className='w-80 md:w-[1000px] h-80' ></iframe>
                <p className='text-second-tema-site drop-shadow-verdeB p-5'>Rua Capitao Mor Tomé Rodrigues, nº 152 - Centro, Baependi, MG, Brazil
            </p>
            </div>
           
            <div className='flex justify-center items-center gap-10'>
                <Link href='https://www.instagram.com/marcelogamesmg/' target='blank' className='flex blank items-center justify-center bg-second-tema-site w-10 h-10 p-1 drop-shadow-verdeB outline-double outline-second-tema-site'>
                    <FontAwesomeIcon icon={faInstagram} className=' text-branco' />
                </Link>
                <Link href='https://www.facebook.com/marcelogamesmg' target='blank' className='flex items-center justify-center bg-second-tema-site w-10 h-10 p-1 drop-shadow-verdeB outline-double outline-second-tema-site'>
                    <FontAwesomeIcon icon={faFacebook} className=' text-branco' />
                </Link>
            </div>
        </div>
    )
}