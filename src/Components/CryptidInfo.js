import { Link } from "react-router-dom"


function CryptidInfo ({id, name,}) {


    return(
        <>
        <li className="CryptidList">
            <Link className="link-class" to={`/cryptids/${id}`}>{name}</Link>           
        </li>
        </>
    )   
}


export default CryptidInfo