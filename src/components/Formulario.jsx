import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";


export default function Formulario() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e) {
        e.preventDefault();

        if (name === "" || email === "" || message === "") {
            alert("Preencha todos os campos")
            return;
        }
        alert("teste")
    }

    return (
        <div id='form' className='flex flex-col justify-center items-center w-screen'>
            <h1 className='text-xl md:text-6xl font-minhaFonte '>Contato</h1>
            <div className='flex flex-col md:flex-row justify-center items-center py-20 gap-10'>

                <div className="w-72 md:w-96">
                    <form
                        onSubmit={sendEmail}
                        className="flex flex-col p-4 bg-tema-site px-4  border-double border-4 border-second-tema-site text-second-tema-site"
                    >
                        <label className="mt-2 text-sm p-1">
                            Nome:
                        </label>
                        <input type="text" name="name"
                            className=" p-2"
                            placeholder="Digite o seu nome"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />

                        <label className="mt-2 text-sm p-1">
                            E-mail:
                        </label>
                        <input type="text" name="name"
                            className=" p-2"
                            placeholder="Digite seu e-mail"

                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <label className="mt-2 text-sm p-1">
                            Mensagem:
                        </label>
                        <textarea
                            placeholder="Digite sua mensagem..."
                            className="p-2"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                        <input type="submit" value="Enviar
                    "
                            className="p-2 px-5 outline-double mt-5 outline-second-tema-site font-bold bg-tema-site w-28 text-second-tema-site hover:drop-shadow-verdeB hover:bg-second-tema-site hover:text-branco"
                        />
                    </form>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14801.659052887257!2d-44.8887302!3d-21.9570391!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf252c24f3303d082!2sMarcelo%20Games!5e0!3m2!1spt-BR!2sbr!4v1675190839925!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy " className='w-80 md:w-96 h-96' referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='flex justify-center items-center gap-10'>
                <Link href='/??' className='flex items-center justify-center bg-second-tema-site
            p-1 drop-shadow-verdeB outline-double outline-second-tema-site'>
                    <FontAwesomeIcon icon={faInstagram} className='h-14 p-2 text-branco' />
                </Link>
                <Link href='/??' className='flex items-center justify-center bg-second-tema-site
            h- p-1 drop-shadow-verdeB outline-double outline-second-tema-site'>
                    <FontAwesomeIcon icon={faFacebook} className='h-14 p-2 text-branco' />
                </Link>
            </div>
        </div>
    )
}