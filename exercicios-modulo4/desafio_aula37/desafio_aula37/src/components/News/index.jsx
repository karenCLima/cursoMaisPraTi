import { useState, useEffect } from "react"


const News =()=>{

    const [news, setNews] = useState(null)
    const [count, setCount] = useState(1)

    useEffect(()=>{
        const timerId = setInterval(() => {
            const getNews = async ()=>{
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
                const newsData = await response.json()
                setNews(newsData)
                console.log(newsData)
            }

            getNews()

            setCount((prevCount) => prevCount + 1)
          }, 10000);

          return () => {
            clearInterval(timerId)
            console.log("Timer foi limpo")
            setNews(null)
          };
        
    }, [count])

    return (
        <>
            {news ? (
                <div>
                    <h1>Título de um artigo a cada 30 segundos:</h1>
                    <p>Artigo: {news.id}</p>
                    <h2>Titulo: {news.title}</h2>
                </div>
                
            ):(
                <h1>Aguardando carregamento</h1>
            )}
        </>
    )
}

export default News