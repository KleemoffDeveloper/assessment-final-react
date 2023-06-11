import { BASE_URL } from "./App"
import { useEffect, useState } from "react";

export default function Movies() {
    const [chosenMovie, setMovie] = useState({})
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(BASE_URL + '/films')
            .then(response => response.json())
            .then(m_data => setData(m_data))
    }, [])
    return (
        <section className="movies">
            <h1 className="title">Select a Movie</h1>
            <select onChange={e => {
                const res = data.filter(movie => movie.id === e.target.value)[0];
                setMovie(res ? res : {})
            }}>
                <option value={null}></option>
                {data.map(movie => {
                    return <option value={movie.id}>{movie.title}</option>
                })}
            </select>
            {Object.keys(chosenMovie).length > 0 ?
                (<section className="details">
                    <h1><b>Title:</b> {chosenMovie.title}</h1>
                    <p><b>Release Date:</b> {chosenMovie.release_date}</p>
                    <p><b>Description:</b> {chosenMovie.description}</p>
                </section>) : <></>}
        </section>
    )
}