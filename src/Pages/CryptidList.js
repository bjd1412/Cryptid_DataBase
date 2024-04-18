import React from "react";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import CryptidCards from "../Components/CryptidCards";
import Submissions from "../Components/Submissions";


function CryptidList () {
   const [crypt, setCrypt] = useOutletContext()
   const [search, setSearch] = useState("")

   function handleSubmit (NewCryptid) {
      setCrypt([...crypt, NewCryptid])
    }

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
      <Submissions onHandleSubmit={handleSubmit}/>
      </div>
   )
    
}

export default CryptidList