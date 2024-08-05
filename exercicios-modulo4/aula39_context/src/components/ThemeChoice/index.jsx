import { useContext } from "react"
import { ConfigContext } from "../../context/ConfigContext.jsx"


const ThemeChoice = ()=>{

    const { config, setConfig } = useContext(ConfigContext)

    const toggleTheme = () => {
        setConfig((prevState) => ({
            ...prevState, 
            theme: prevState.theme === 'light' ? 'dark' : 'light' 
        }));
    };

    return(
        <>
            <h1>Selecione o Tema: </h1>
            <div style={{
                    background: config.theme === 'dark' ? 'black' : 'grey', 
                    color: config.theme === 'dark' ? 'white' : 'white'}}>
                    Tema: {config.theme}
            </div>
            <button onClick={()=>toggleTheme()}>Mudar Tema</button>
        </>
    )
}

export default ThemeChoice