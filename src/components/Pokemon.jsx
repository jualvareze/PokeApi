import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const Pokemon = () => {
    const [nombre, setNombre] = useState("")
    const [imagen, setImagen] = useState("")
    const [altura, setAltura] = useState()
    useEffect(() => {
        obtenerJson()
    }, [])

    const { name } = useParams()

    const obtenerJson = async () => {
        const response = await fetch("http://pokeapi.co/api/v2/pokemon/" + name)
        const data = await response.json()
        setNombre(data.name)
        setImagen(data.sprites.front_default)
        setAltura(data.height)
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="card m-4" style={{ width: "20rem" }}>
                    <img src={imagen} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">altura:{altura}</p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Pokemon