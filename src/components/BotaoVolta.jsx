import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
export default function BotaoVolta() {

    var toTopButton = document.getElementById("to-top-button");

    // When the user scrolls down 200px from the top of the document, show the button
    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            toTopButton.classList.remove("hidden");
        } else {
            toTopButton.classList.add("hidden");
        }
    }

    // When the user clicks on the button, smoothy scroll to the top of the document
    function goToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div>
            <a href="#inicio">
                <button id="to-top-button" onclick="goToTop()" title="Go To Top"
                    class="hidden fixed z-90 bottom-28 right-5 border-0 w-12 rounded-full drop-shadow-verdeB bg-branco text-3xl font-bold outline-double outline-second-tema-site">
                    <FontAwesomeIcon icon={faArrowAltCircleUp} className='text-second-tema-site '/>
                </button>
            </a>
        </div>

    )

}
/*<div>
            <a href="#inicio" className='bg-second-tema-site fixed bottom-28 right-5 z-50 rounded-full hover:drop-shadow-verdeB'>
                <FontAwesomeIcon icon={faArrowAltCircleUp} className='h-14 p-2' />
            </a>
        </div>
*/
