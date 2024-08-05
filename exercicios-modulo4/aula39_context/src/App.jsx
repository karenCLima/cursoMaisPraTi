import LanguageChoice from "./components/LanguageChoice"
import ThemeChoice from "./components/ThemeChoice"
import { ConfigProvider } from "./context/ConfigContext.jsx"



function App() {
 

  return (
    <>
      <ConfigProvider>
        <LanguageChoice/>
        <ThemeChoice/>
      </ConfigProvider>
    </>
    
  )
}

export default App
