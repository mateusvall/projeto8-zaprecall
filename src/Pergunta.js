import React from 'react'
import play_pergunta from './play_pergunta.png'
import turn from './turn.png'
import errado from './errado.png'
import certo from './certo.png'
import quase from './quase.png'
import sad from './sad.png'
import happy from './happy.png'
import './Pergunta.css'

export default function Pergunta({index, pergunta, resposta, feito, setFeito, icones, setIcones, tamanho, mensagem, setMensagem}){
    const [status, setStatus] = React.useState("pergunta");
    const [content, setContent] = React.useState("Pergunta " +(index+1))
    const [cor, setCor] = React.useState("#333333")
    const [image, setImage] = React.useState("")
    // const [select, setSelect] = React.useState(false);
    // const [flip, setFlip] = React.useState(false);
    return(
        <div className={status} style={{color:cor}}>
            <h1>{content}</h1>
            <img className="play-button" src={play_pergunta} onClick={()=>(
                setStatus("selected"),
                setContent(pergunta)
            )
                }/>
            <img className="turn-button" src={turn} onClick={()=> (
                setStatus("turned"),
                setContent(resposta)
                )}/>
            <button className="red" onClick={()=> voltaPergunta("#FF3030",errado)}>Não Lembrei</button>
            <button className="yellow" onClick={()=> voltaPergunta("#FF922E", quase)}>Quase não Lembrei</button>
            <button className="green" onClick={()=> voltaPergunta("#2FBE34", certo)}>Zap!</button>
            <img className="check-button" src={image} />
        </div>
    )

    function voltaPergunta(color, img){
        setFeito(feito+1);
        setStatus("finished");
        setContent("Pergunta " +(index+1));
        setCor(color);
        setImage(img);

        const novoIcone = {img:img}
        const iconesAtualizados = [...icones, novoIcone]
        setIcones(iconesAtualizados);

        verificaFim();

    }

    function verificaFim(){
       if((feito+1) === tamanho){
        alert("Cabou-se!")
        if(icones.filter(verificaErrado).length >= 1){
            setMensagem({titulo:"Putz...",texto:"Ainda faltam alguns...Mas não desanime!", img:sad})
        }else{
            setMensagem({titulo:"Parabéns!",texto:"Você não esqueceu de nenhum flashcard!", img:happy})
        }
       }
    }

    function verificaErrado(elemento){
        return elemento.img == errado;
    }
}

