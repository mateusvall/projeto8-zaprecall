import play_pergunta from './play_pergunta.png'
import './Pergunta.css'
export default function Pergunta({index}){
    return(
        <div className="pergunta">
            <h1>Pergunta {index+1}</h1>
            <img src={play_pergunta}/>
        </div>
    )
}