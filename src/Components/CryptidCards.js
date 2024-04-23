import React from "react";
import CryptidInfo from "../Components/CryptidInfo"

function CryptidCards ({AllCryptids}){

    return(
        <div>
             <div className="CryptList">
            {AllCryptids.map(crip => (<CryptidInfo key={crip.id} id={crip.id} name={crip.name}/>))}
            </div>
        </div>
    )
}

export default CryptidCards