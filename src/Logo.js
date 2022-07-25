import React from "react";
import './Logo.css'
import raio_grande from './raio_grande.png'

export default function Logo(){
    return(
        <div className="logo">
            <img src={raio_grande}/>
            <p>ZapRecall</p>
        </div>
    )
}