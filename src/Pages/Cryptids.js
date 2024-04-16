import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Cryptids () {
    const [cryptid, setCryptid] = useState({})
    const params = useParams()
    const cryptidId = params.id

    useEffect(() => {
        fetch(`http://localhost:3000/cryptids/${cryptidId}`)
        .then(res => res.json())
        .then(res => setCryptid(res))
    },[cryptidId])

    if(!cryptid.name) {
        return <h1>Loading...</h1>
    }
    
    return (
        <div className="Main">
        <h1>{cryptid.name}</h1>
        <img className="CryptidImages" src={cryptid.image}/>
        <span>{cryptid.origin}</span>
        <p>{cryptid.lore}</p>
        </div>
    )
}

export default Cryptids