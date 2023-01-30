export default function Botao({informacao}){
    return(
        <button className="p-2 px-5 outline-double outline-second-tema-site font-bold bg-tema-site w-28 text-second-tema-site hover:drop-shadow-verdeB hover:bg-second-tema-site hover:text-branco">
            {informacao}
        </button>
    )
}