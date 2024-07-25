import { useState } from 'react'
import NavButton from '../NavButton'
import Style from './NavPage.module.css'


const NavPage = () =>{
    const texts = [
        ["Saber mais de react", "estudar hooks", "estudar states"],
        ["Saber mais de vite", "ver documentação", "saber diferenças entre usar e não usar vite"],
        ["Fazer lista de exercícios", "estudar map", "estudar arrays"],
        ["Começar curso", "Entender typescript", "ver video"]
    ]

    const [content, setContent] = useState([])

    function renderPage(num){
        setContent(texts[num])
    }

    return(
        <>
            <h1 className={Style.title}>Navegação entre Paginas</h1>
            <div className={Style.nav}>
            <NavButton onClick={()=>renderPage(0)}>react</NavButton>
            <NavButton onClick={()=>renderPage(1)}>Vite</NavButton>
            <NavButton onClick={()=>renderPage(2)}>javascript</NavButton>
            <NavButton onClick={()=>renderPage(3)}>typescript</NavButton>
            </div>
            <div className={Style.content}>
                <ul>
                    {content.map((text, index) =>( <li className={Style.list_item} key={index}>{text}</li>))}
                </ul>
            </div>
        </>
        
    )
}

export default NavPage