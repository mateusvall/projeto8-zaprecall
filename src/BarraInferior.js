import './BarraInferior.css'
export default function BarraInferior({tamanho, feito}){
    return(
        <div className="barra-inferior">
            <h1>{feito}/{tamanho} CONCLUÍDOS</h1>
        </div>
    )
}