import { useEffect, useState } from "react";
import { BASE_URL } from './App'

export default function People() {
    const [inputVal, setInputVal] = useState('')
    const [people, setPeople] = useState([])
    const [queryPerson, setQueryPerson] = useState({})
    const [hasSearched, setHasSearched] = useState(false)
    useEffect(() => {
        if(people.length > 0){
            return;
        }

        fetch(BASE_URL + '/people')
            .then(response => response.json())
            .then(m_data => setPeople(m_data))
    }, [])
    return (
        <section className="people">
            <h1 className="title">Search for a Person</h1>
            <form onSubmit={e => {
                e.preventDefault()
                const p = people.filter(person => person.name.toLowerCase() === inputVal.toLowerCase())[0]
                setQueryPerson(p ? p : {})
                setHasSearched(true)
            }}>
                <input type="text" onChange={e => setInputVal(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            {Object.keys(queryPerson).length > 0 ?
                (<section className="details">
                    <h1><b>Name:</b> {queryPerson.name}</h1>
                    <p><b>Age:</b> {queryPerson.age}</p>
                    <p><b>Eye Color:</b> {queryPerson.eye_color}</p>
                    <p><b>Hair Color:</b> {queryPerson.hair_color}</p>
                </section>) : hasSearched ? <>Not Found</> : <></>}
        </section>
    );
}