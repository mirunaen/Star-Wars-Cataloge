import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
function CharacterPage() {
    //It is deconstracted meaning is it from the parent 
    const { id } = useParams()
    return (
        <div>
            <p>hi</p>
        </div>
    )
}


export default CharacterPage;