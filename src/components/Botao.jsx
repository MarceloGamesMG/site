import { motion } from "framer-motion"

export default function Botao({ informacao }) {

    const parent = {
        varianteA: { scale: 1 },
        varianteB: { scale: 1.1 },
    }
    return (
        <motion.button
            className="p-2 px-5 outline-double outline-second-tema-site font-bold bg-tema-site w-28 text-second-tema-site hover:drop-shadow-verdeB hover:bg-second-tema-site hover:text-branco"
            variants={parent}
            initial="varianteA"
            whileHover="varianteB"
        >
            {informacao}
        </motion.button>
    )
}