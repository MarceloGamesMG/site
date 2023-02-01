import Head from 'next/head'
import { Inter } from '@next/font/google'
import Inicio from '@/components/Inicio'
import Conteudo from '@/components/Conteudo'
import Footer from '@/components/Footer'
import SobreNos from '@/components/SobreNos'
import Baependi from '@/components/Baependi'
import Formulario from '@/components/Formulario'
import Wpp from '@/components/Wpp'
import BotaoVolta from '@/components/BotaoVolta'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Head>
        <title>Marcelo Games</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wpp />
      <BotaoVolta/>
      <Inicio />
      <SobreNos />
      <Conteudo />
      <Baependi />
      <Formulario />
      <Footer />
    </div>
  )
}
