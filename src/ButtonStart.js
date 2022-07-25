import React from "react";
import ReactDOM from 'react-dom';
import Logo from "./Logo";
import './ButtonStart.css'

export default function ButtonStart(){
    return(
        <div className='button-start' onClick={() => alert("Opa!")}>
            <h1>Iniciar Recall!</h1>
        </div>
    )
}