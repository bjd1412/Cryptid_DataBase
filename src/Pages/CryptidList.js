import React from "react";
import {  useState } from "react";
import CryptidCards from "../Components/CryptidCards";
import CryptidContext from "../Components/CryptidContext";
import { useContext } from "react";


function CryptidList () {
   const {crypt, setCrypt} = useContext(CryptidContext)
   const [search, setSearch] = useState("")

  

   function searchChange (e) {
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
      <input className="List"  name="search" placeholder="Search Cryptid..." value={search} onChange={searchChange}></input>
      <CryptidCards AllCryptids={AllCryptids} />
      </div>
   )
    
}

export default CryptidList