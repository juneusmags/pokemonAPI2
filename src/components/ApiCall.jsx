import React, { useEffect, useState } from 'react';


const ApiCall = props =>{
    const [pokemon, setPokemon] = useState({});

    const listpokemon = () => { 
        
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
                .then (res =>{
                    return res.json()
                })
                .then(res => {
                    console.log(res.results)
                    setPokemon(res.results)
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