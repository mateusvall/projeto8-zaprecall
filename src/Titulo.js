import './Titulo.css'
import raio_pequeno from './raio_pequeno.png'
export default function Titulo(){
    return(
        <div className="titulo">
            <img src ={raio_pequeno}/>
            <h1>ZapRecall</h1>
        </div>
    )
}