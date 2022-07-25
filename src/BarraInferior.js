import './BarraInferior.css'
export default function BarraInferior({tamanho, feito, icones, mensagem}){
    return(
        <div className="barra-inferior">
            {mensagem? <h3><img src={mensagem.img}/>{mensagem.titulo}</h3>:""}
            {mensagem? <h2>{mensagem.texto}</h2>:""}
            <h1>{feito}/{tamanho} CONCLUÍDOS</h1>
            <h1>{icones.map((icone) => <img src={icone.img}/>)}</h1>
        </div>
    )
}