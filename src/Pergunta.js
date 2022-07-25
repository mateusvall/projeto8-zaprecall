import React from 'react'
import play_pergunta from './play_pergunta.png'
import turn from './turn.png'
import './Pergunta.css'

export default function Pergunta({index, pergunta}){
    const [select, setSelect] = React.useState(false);
    const [flip, setFlip] = React.useState(false);
    return(
        <div className={select?"selected":"pergunta"}>
            <h1>{select?pergunta:"Pergunta "+ (index+1)}</h1>
            <img className="play-button" src={play_pergunta} onClick={()=> setSelect(!select)}/>
            <img className={flip?"turned":"turn-button"} src={turn} onClick={()=> setFlip(!flip)}/>
        </div>
    )
}