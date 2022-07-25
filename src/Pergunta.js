import React from 'react'
import play_pergunta from './play_pergunta.png'
import turn from './turn.png'
import './Pergunta.css'

export default function Pergunta({index, pergunta, resposta}){
    const [select, setSelect] = React.useState(false);
    const [flip, setFlip] = React.useState(false);
    return(
        <div className={select?(flip?"turned":"selected"):"pergunta"}>
            <h1>{select?(flip?resposta:pergunta):"Pergunta "+ (index+1)}</h1>
            <img className="play-button" src={play_pergunta} onClick={()=> setSelect(!select)}/>
            <img className="turn-button" src={turn} onClick={()=> setFlip(!flip)}/>
            <button className="red" onClick={()=> voltaPergunta()}>Não Lembrei</button>
            <button className="yellow" onClick={()=> voltaPergunta()}>Quase não Lembrei</button>
            <button className="green" onClick={()=> voltaPergunta()}>Zap!</button>
        </div>
    )

    function voltaPergunta(){
        setSelect(false);
        setFlip(false)
    }
}

