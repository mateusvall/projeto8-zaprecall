import React from "react";
import ReactDOM from 'react-dom';
import TelaPerguntas from "./TelaPerguntas";
import './ButtonStart.css'

export default function ButtonStart(){
    return(
        <div className='button-start' onClick={() => MudaTela()}>
            <h1>Iniciar Recall!</h1>
        </div>
    )
}

function MudaTela(){
    alert("Botão Apertado");
    ReactDOM.render(<TelaPerguntas />, document.querySelector(".root"));
}