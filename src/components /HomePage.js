import { useState, useEffect } from 'react';
import {
    Link
} from "react-router-dom";
import styled from 'styled-components';

function HomePage() {
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
    }, [cataloge])

    return (
        <div className="App">
            <h1>Star Wars Cataloge</h1>
            {cataloge && cataloge.map(character => {
                return (
                    <div>
                        <p>{character.name}</p>
                        <p>{character.height}</p>
                    </div>

                )
            })}
            <button onClick={() => {
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

export default HomePage;


const Wrapper = styled.div`
  display:flex;
  border: 2px black;
  background: papayawhip;

`