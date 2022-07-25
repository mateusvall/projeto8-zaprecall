import React from "react";
import './TelaDeInicio.css'
import ButtonStart from "./ButtonStart";
import Logo from "./Logo";


export default function TelaDeInicio(){
    return(
        <div className="tela-inicial">
            <Logo/>
            <ButtonStart/>
        </div>
    )
}