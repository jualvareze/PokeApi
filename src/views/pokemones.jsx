import { useEffect, useState } from "react"
import { useContext } from "react"
import Contexto from "../context"
import { useNavigate } from "react-router-dom"
const Pokemones = () =>{
    const {pokemones, setPokemones} = useContext(Contexto)
    const navegar = useNavigate()

    useEffect(() => {
        obtenerJson()
      }, [])
    
    
      const obtenerJson = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
        const data = await response.json()
        setPokemones(data.results)
      }

const mostrarPokemon = (name) => {
    navegar("/Pokemon/"+ name)
}

const seleccionarPokemon = (e) =>{
    mostrarPokemon(e.target.value)    
}
    return(
        <>
        <div className="container pt-4 text-center">
                    <h1 className="m-4">Selecciona un Pokemon</h1>
                    <select  onChange={seleccionarPokemon}>
                    {
                    pokemones.map(function (element) {
                        return <option key="" value={element.name}>{element.name}</option>
                    })
                }
                    </select>
                    <h1></h1>
        </div>
        </>
    )
}
export default Pokemones