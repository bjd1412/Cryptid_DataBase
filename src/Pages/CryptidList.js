import React from "react";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";



function CryptidList () {
   const [crypt, setCrypt] = useOutletContext()
   const [search, setSearch] = useState("")
   
   return(
<h1>placeholder</h1>
   )
    
}

export default CryptidList