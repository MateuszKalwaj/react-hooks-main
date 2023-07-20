// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {fetchPokemon} from "../pokemon";
import {PokemonInfoFallback} from "../pokemon";
import {PokemonDataView} from "../pokemon";
import {PokemonForm} from '../pokemon'
import {useEffect, useState} from "react";

function PokemonInfo({pokemonName}) {
    const [state, setState] = useState({
        status: 'idle',
        pokemon: null,
        error: null
    })
    const {status, pokemon, error} = state

    useEffect(() => {
        if (!pokemonName) {
            return
        }
        setState({status: 'pending'})
        fetchPokemon(pokemonName).then(
            pokemon => {
                setState({status: 'resolved', pokemon: pokemon})
            },
            error => {
                setState({status: 'rejected', error: error})
            }
        )
    }, [pokemonName])


    if (status === 'idle') {
        return 'submit pokemon'
    } else if (status === 'pending') {
        return <PokemonInfoFallback name={pokemonName}/>
    } else if (status === 'resolved') {
        return <PokemonDataView pokemon={pokemon}/>
    } else {
        return <div role="alert">
            There was an error: <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
        </div>
    }
}

function App() {
    const [pokemonName, setPokemonName] = React.useState('')

    function handleSubmit(newPokemonName) {
        setPokemonName(newPokemonName)
    }

    return (
        <div className="pokemon-info-app">
            <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit}/>
            <hr/>
            <div className="pokemon-info">
                <PokemonInfo pokemonName={pokemonName}/>
            </div>
        </div>
    )
}

export default App