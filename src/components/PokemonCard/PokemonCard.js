import React, { useState, useEffect } from 'react';
import axios from "axios";

function PokemonCard({ endpoint }) {
    const [ pokemon, setPokemon ] = useState({})

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get(endpoint)
                setPokemon(data)
            } catch (e) {
                console.log(e)
            }
        }

        if (endpoint) fetchData()
        }, [endpoint]
    )

    return (
        <section className="poke-card">
            {Object.keys(pokemon).length > 0 &&
            <div>
                <h1>{ pokemon.name }</h1>
                <img
                    src={ pokemon.sprites.front_default }
                    alt="Afbeelding pokémon"
                />
                <p><strong>Weight: </strong>{ pokemon.weight }</p>
                <p><strong>Moves: </strong>{ pokemon.moves.length }</p>
                <p><strong>Abilities: </strong>{ pokemon.moves.length }</p>
                <ul>
                    {pokemon.abilities.map((ability) => {
                        return (
                            <li key={`${ability.ability.name}-${pokemon.name}`}>
                                {ability.ability.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
            }
        </section>
    );
}

export default PokemonCard;
