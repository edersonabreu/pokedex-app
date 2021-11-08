import { useEffect, useState } from 'react';
import PokemonThumbnail from './components/PokemonThumbnails';
import LogoPokedex from './logo-pokedex-app.png';


function App() {
    const [allPokemons, setAllPokemons] = useState([]);
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

    const getAllPokemons = async() => {
        const res = await fetch(loadMore);
        const data = await res.json();

        setLoadMore(data.next);

        function createPokemonObject(result){
            result.forEach(async (pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                const data = await res.json();
                
                setAllPokemons(currentList => [...currentList, data]);
               
            })
        }
        createPokemonObject(data.results);
        await console.log(allPokemons);
    }

    useEffect(() => {
       getAllPokemons();
    }, [])



    return (
        <div className="app-container">
            <h1><img src={LogoPokedex} /> </h1> 
            <div className="pokemon-container">
                <div className="all-container">
                    {allPokemons.map( (pokemonStats, index) => 
                    <PokemonThumbnail
                        key={index}
                        id={pokemonStats.id}
                        image={pokemonStats.sprites.other.dream_world.front_default}
                        name={pokemonStats.name}
                        type={pokemonStats.types[0].type.name}
                    />)}
                </div>
                <button className="load-more" onClick={() => getAllPokemons()}>Load More Pokémons</button>
            </div>
        </div>
    );
}

export default App;
