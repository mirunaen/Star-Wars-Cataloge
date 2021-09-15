
import React from 'react';

import { useEffect, useState } from 'react';
import {
    Link

} from "react-router-dom";

function CardPage() {
    const [cataloge, setListCataloge] = useState([{}])
    const [count, setCount] = useState(2)

    const urlApi = `https://swapi.dev/api/people/?page=${count}&format=json`;

    //GET the cataloge
    async function getPostData() {
        const response = await fetch(urlApi);
        const data = await response.json();
        setListCataloge(data.results)
    }

    //when the user enters the page
    useEffect(() => {
        getPostData()
    }, [])

    return (
        <div className="App">
            <h1 className="starWars">Star Wars Cataloge</h1>
            <div className="container">

                {cataloge && cataloge.map((character, i) => {
                    const id = character.url.split("/")[5];
                    return (
                        <div className="Wrapper" key={i}>
                            <Link className="title-link" to={`/character/${id}`}>
                                <div className="Title">
                                    <p>{character.name}</p>
                                </div>

                                <div className="Info">
                                    <p>Height: {character.height}</p>

                                    <p>Birth year: {character.birth_year}</p>

                                    <p>Films: {character.films && character.films.length}</p>

                                </div>
                            </Link>
                        </div>

                    )
                })}
            </div>
            <button className="btn-cards" onClick={() => {
                if (count <= 8) {
                    setCount(count + 1)
                    console.log(count)
                } else {
                    setCount(2)
                }

            }}>Load More Cards</button>
        </div>
    );
}

export default CardPage;

