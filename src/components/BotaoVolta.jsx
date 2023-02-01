import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
export default function BotaoVolta() {
    return (
        <div>
            <a href="#inicio" className='bg-branco fixed bottom-5 left-5 z-50  hover:drop-shadow-verdeB outline-double outline-second-tema-site rounded-full text-second-tema-site'>
                <FontAwesomeIcon icon={faArrowAltCircleUp} className='h-12'/>
            </a>
        </div>
    )
}
