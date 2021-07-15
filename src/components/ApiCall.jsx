import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiCall = props =>{
    const [pokemon, setPokemon] = useState({});

    const listpokemon = () => { 
        
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
                // .then (res =>{
                //     return res.json()
                // })
                .then(res => {
                    console.log(res.results)
                    setPokemon(res.data.results)
                })
                .catch(err => {
                    console.log(err)
                })
    }
    return(
        <div>
            {pokemon.length > 0 && pokemon.map((poke, index)=>{
                return (<div key={index}>{poke.name}</div>)
            })}
            <button onClick = {listpokemon}>List</button>
        </div>

        
    )
}

export default ApiCall;