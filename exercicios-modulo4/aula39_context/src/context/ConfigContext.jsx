import  React,{createContext, useState} from 'react'

export const ConfigContext = createContext()

export const ConfigProvider = (props) =>{

    const [config, setConfig] = useState({ theme: 'light', language: 'pt-br' });

    return(
        <ConfigContext.Provider value={{config, setConfig}}>
            {props.children}
        </ConfigContext.Provider>
    )
}