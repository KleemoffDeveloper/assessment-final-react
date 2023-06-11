import { useState } from "react";
import { BASE_URL } from './App'
import { render } from "@testing-library/react";

export default function Locations() {
    const [show, setShow] = useState(false)
    const [locations, setLocations] = useState([])
    function sortLocations(method) {
        setLocations([...locations.sort((loc1, loc2) => loc1[method].localeCompare(loc2[method]))])
    }
    return (
        <section className="locations">
            <h1 className="title">List of Locations</h1>
            {show ? (
                <ul>
                    <button onClick={() => setShow(false)}>Hide Locations</button>
                    <button onClick={() => {
                        sortLocations('name')
                    }}>Sort by Name</button>
                    <button onClick={() => {
                        sortLocations('climate')

                    }}>Sort by Climate</button>
                    <button onClick={() => {
                        sortLocations('terrain')
                    }}>Sort by Terrain</button>
                </ul>
            ) : <button className="locations-toggle" onClick={() => {
                setShow(true)

                if (locations.length > 0) {
                    return;
                }

                fetch(BASE_URL + '/locations')
                    .then(response => response.json())
                    .then(m_data => setLocations(m_data))
            }}>Show Locations</button>}
            {locations.length > 0 && show ? (
                <ul>{locations.map(location => (
                    <li>
                        <ul>
                            <li><b>Name:</b> {' ' + location.name}</li>
                            <li><b>Climate:</b> {' ' + location.climate}</li>
                            <li><b>Terrain:</b> {' ' + location.terrain}</li>
                        </ul>
                    </li>
                ))}</ul>
            ) : <></>}
        </section>
    );
}