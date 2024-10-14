import {useEffect, useState} from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './home.css'

// url da API /movie/now_playing?api_key=4721ffb021b06140dae5343108aef3d3

function Home(){
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => { //toda vez que a aplicação abrir sera chamado useEffect

        async function loadFilmes(){
            const response = await api.get("/movie/now_playing", {
                params:{
                    api_key: "4721ffb021b06140dae5343108aef3d3",
                    language: "pt-br",
                    page: 1,
                }
            })

            //console.log(response.data.results.slice())
            setFilmes(response.data.results)
            setLoading(false)
        }

        loadFilmes()

    }, [])

    if(loading){
        return(
            <div className='loading'>
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return(
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((filme) =>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;