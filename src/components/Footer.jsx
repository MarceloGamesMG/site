import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo-sem-fundo.png"

export default function () {
    return (
        <div className="bg-bg2 bg-cover w-screen flex flex-col justify-center items-center border-second-tema-site drop-shadow-verde border-t-2">
            <div className='flex flex-col md:flex-row justify-center items-center w-[320px] md:w-[1000px] md:gap-20'>
                <Image src={logo} alt='logo empresa' className='w-44 md:w-44 h-full mt-10'/>
                <div className="grid md:grid-cols-4 md:gap-28 w-[320px] md:w-[1000px]">
                <div className="flex flex-col items-center justify-center pt-10">
                        <Link href="/??" className="text-2xl font-bold mb-5">
                            teste
                        </Link>
                        <Link href="/??" className="">
                            teste
                        </Link>
                        <Link href="/??" className="">
                            teste
                        </Link>
                        <Link href="/??" className="">
                            teste
                        </Link>
                        <Link href="/??" className="">
                            teste
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center pt-10">
                        <Link href="/??" className="text-2xl font-bold mb-5">
                            teste
                        </Link>
                        <Link href="/??" className="">
                            teste
                        </Link>
                        <Link href="/??" className="">
                            teste
                        </Link>
                        <Link href="/??" className="">
                            teste
                        </Link>
                        <Link href="/??" className="">
                            teste
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center pt-10">
                        <Link href="/??" className="text-2xl font-bold mb-5">
                            teste
                        </Link>
                        <Link href="/??" className="">
                            teste
                        </Link>
                        <Link href="/??" className="">
                            teste
                        </Link>
                        <Link href="/??" className="">
                            teste
                        </Link>
                        <Link href="/??" className="">
                            teste
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center pt-10">
                        <Link href="/??" className="text-2xl font-bold mb-5">
                            teste
                        </Link>
                        <Link href="/??" className="">
                            teste
                        </Link>
                        <Link href="/??" className="">
                            teste
                        </Link>
                        <Link href="/??" className="">
                            teste
                        </Link>
                        <Link href="/??" className="">
                            teste
                        </Link>
                    </div>
                    
                </div>
            </div>    
            <div className='p-10'>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
            </div>       
        </div>
    )
}