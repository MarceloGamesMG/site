import { motion } from "framer-motion"

export default function Botao({ informacao,link }) {

    const parent = {
        varianteA: { scale: 1 },
        varianteB: { scale: 1.1 },
    }
    return (
        <a href={link}>
            <motion.button
                className="p-2 px-5 outline-double flex  outline-second-tema-site font-bold bg-tema-site text-second-tema-site hover:drop-shadow-verdeB hover:bg-second-tema-site hover:text-branco"
                variants={parent}
                initial="varianteA"
                whileHover="varianteB"
            >
                {informacao}
            </motion.button>
        </a>
    )
}