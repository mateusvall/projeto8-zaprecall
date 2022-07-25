import React from "react";
import Titulo from "./Titulo";
import './TelaPerguntas.css'
import Pergunta from "./Pergunta";
import BarraInferior from "./BarraInferior";

const perguntas = [
    {
        pergunta:"O que é JSX?",
        resposta:"Uma extensão de linguagem do JavaScript"
    },
    {
        pergunta:"O React é __",
        resposta:"uma biblioteca JavaScript para construção de interfaces"
    },
    {
        pergunta:"Componentes devem iniciar com __",
        resposta:"letra maiúscula"
    },
    {
        pergunta:"Podemos colocar __ dentro do JSX",
        resposta:"expressões"
    },
    {
        pergunta:"O ReactDOM nos ajuda __",
        resposta:"interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        pergunta:"Usamos o npm para __",
        resposta:"gerenciar os pacotes necessários e suas dependências"
    },
    {
        pergunta:"Usamos props para __",
        resposta:"passar diferentes informações para componentes"
    },
]

export default function TelaPerguntas(){
    const [feito, setFeito] = React.useState(0);
    const [icones, setIcones] = React.useState([]);
    const [mensagem, setMensagem] = React.useState(0)
    return(
        <div className={mensagem?"tela-final":"tela-perguntas"}>
            <Titulo/>
            {perguntas.map((pergunta,index) => <Pergunta index={index} pergunta={pergunta.pergunta} resposta={pergunta.resposta} feito={feito} setFeito={setFeito} icones={icones} setIcones={setIcones} tamanho={perguntas.length} mensagem={mensagem} setMensagem={setMensagem}/>)}
            <BarraInferior tamanho={perguntas.length} feito={feito} icones={icones} mensagem={mensagem}/>
        </div>
    )
}