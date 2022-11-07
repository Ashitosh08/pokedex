import React, { useEffect, useState } from 'react'
import PokemonList from '../components/PokemonList'
import SearchForm from '../components/SearchForm'
// import axios from 'axios'
import { fetchPokemon } from '../services/getPokemon'
import Loading from './Loading'
const Home = () => {
  // const [searchTerm, setSearchTerm] = useState('')
  // const [pokemon, setPokemon] = useState([])
  // const [loading, setLoading] = useState(false)

  const [pokemon, setPokemon] = React.useState()
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [errorMsg, setErrorMsg] = React.useState('')

  const getPokemon = async (query) => {
    if (!query) {
      setErrorMsg('You must enter a Pokemon')
      setError(true)
      return
    }
    setError(false)
    setLoading(true)
    setTimeout(async () => {
      try {
        const response = await fetchPokemon(query)
        const results = await response.json()
        console.log(results)
        console.log(response)
        setPokemon(results)
        setLoading(false)
      } catch (err) {
        console.log(err)
        setLoading(false)
        setError(true)
        setErrorMsg('Pokemon not found.')
      }
    }, 1500)
  }

  return (
    <div>
      <SearchForm getPokemon={getPokemon} />
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : null}

      {!loading && pokemon ? (
        <PokemonList
          name={pokemon.name}
          sprite={pokemon.sprites.other.dream_world.front_default}
          abilities={pokemon.abilities}
          stats={pokemon.stats}
          species={pokemon.species}
          // types={pokemon.types}
          type={pokemon.types[0].type.name}
          order={pokemon.order}
          game_indices={pokemon.game_indices}
          height={pokemon.height}
          weight={pokemon.weight}
          egg_groups={pokemon.egg_groups}
          moves={pokemon.moves
            .map((move) => move.move.name)
            .slice(0, 20)
            .join(', ')}
        />
      ) : null}
    </div>
  )
}

export default Home
