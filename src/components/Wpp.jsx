import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link"


export default function Wpp() {

    return (

        <div className="fixed bottom-5 right-5 z-30 hover:text-second-tema-site hover:drop-shadow-verdeB">
            <Link href="/wpp">
            <FontAwesomeIcon icon={faWhatsapp} className='h-14  animate-bounce' />
            
            </Link>
        </div>
    )

}