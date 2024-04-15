import React from "react";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import CryptidCards from "../Components/CryptidCards";
import Submissions from "../Components/Submissions";


function CryptidList () {
   const [crypt, setCrypt] = useOutletContext()
   const [search, setSearch] = useState("")

   function SearchChange (e) {
      setSearch(e.target.value)
  }

  const AllCryptids = crypt.filter(crip => {
   if(search === ""){
       return true
   } else if( crip.name.toLowerCase().includes(search.toLowerCase())){
       return true
   } else{ return false}
  
})



   return(
      <div className="Main">
      <h2 className="List">Cryptid List:</h2>
      <input className="List"  name="search" placeholder="Search Cryptid..." value={search} onChange={SearchChange}></input>
      <CryptidCards AllCryptids={AllCryptids} />
      <Submissions/>
      </div>
   )
    
}

export default CryptidList