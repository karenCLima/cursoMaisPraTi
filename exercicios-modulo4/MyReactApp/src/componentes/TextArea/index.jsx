import { useState } from "react"
import Style from './TextArea.module.css'


const TextArea = () =>{

    const [text, setText] = useState("")

    return(
        <>
            <h1>Espelhamento</h1>
            <h3 className={Style.texto}>Escreva algo aqui:</h3>
            <input className={Style.input} type="text" value={text} onChange={(event)=>setText(event.target.value)}/>
            <h2 className={Style.texto_repeticao}>{text}</h2>
        </>
    )
}

export default TextArea