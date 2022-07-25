import './BarraInferior.css'
export default function BarraInferior({tamanho, feito, icones}){
    return(
        <div className="barra-inferior">
            <h1>{feito}/{tamanho} CONCLUÍDOS</h1>
            <h1>{icones.map((icone) => <img src={icone.img}/>)}</h1>
        </div>
    )
}