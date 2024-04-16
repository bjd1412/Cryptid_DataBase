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
    
    return (
        <h1>Placeholder</h1>
    )
}

export default Cryptids