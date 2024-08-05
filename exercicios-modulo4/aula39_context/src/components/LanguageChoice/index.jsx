import { useContext } from "react"
import { ConfigContext } from "../../context/ConfigContext.jsx"


const LanguageChoice = ()=>{

    const { config, setConfig } = useContext(ConfigContext)

    const choiceLanguage = (language) => {
        setConfig((prevState) => ({
            ...prevState, 
            language: language 
        }));
    };

    return(
        <>
            <h1>Selecione o idioma:</h1>
            <button onClick={()=> choiceLanguage('pt-br')}>Português</button>
            <button onClick={()=> choiceLanguage('en')}>English</button>
            <button onClick={()=> choiceLanguage('fr')}>French</button>
            <p>Idioma: {config.language}</p>
        </>
    )
}

export default LanguageChoice