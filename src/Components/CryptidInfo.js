import { Link } from "react-router-dom"


function CryptidInfo ({id, name, origin}) {

    return(
        <main className="CryptidList">
            <Link to={`/cryptids/${id}`}>{name}</Link>
            <span>{origin}</span>
        </main>
    )
}

export default CryptidInfo
