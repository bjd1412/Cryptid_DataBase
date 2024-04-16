import React from "react";
import { useState } from "react";

function Submissions ({onHandleSubmit}) {
    const [name, setName] = useState("")
    const [origin, setOrigin] = useState("")
    const [lore, setLore] = useState("")
    const [image, setImage] = useState("")

    function Submitter (e) {
        e.preventDefault()
        const NewForm = {
            name: name,
            origin: origin,
            lore: lore,
            image: image
        }
        fetch("http://localhost:3000/cryptids", {
            method: "POST",
            headers:{
                "Content-Type": "application-json"
            },
            body: JSON.stringify(NewForm)
        })
        .then(res => res.json())
        .then(NewCryptid => onHandleSubmit(NewCryptid))

    }

    return(
        <div className="SubmitForm">
            <h2>Do you know of a cryptid that isnt on the list? Contribute to the database, and add them to the list.</h2>
            <form className="NewCryptid" onSubmit={Submitter}>
                <label  className="Label"> Cryptid Name </label> 
                <input type="text" name="CryptidName" placeholder="Cryptid Name..." value={name} onChange={(e) => setName(e.target.value)}/>
                <label  className="Label"> Cryptid Origin </label>
                <input type="text" name="origin" placeholder="Origin..." value={origin} onChange={(e) => setOrigin(e.target.value)}/>
                <label  className="Label">Cryptid Lore</label>
                <input type="text" name="lore" placeholder="Lore..." size="200" className="Big Box" value={lore} onChange={(e) => setLore(e.target.value)}/>
                <label className="Label">Cryptid Image</label>
                <input type="text" name="image" placeholder="image url..." value={image} onChange={(e) => setImage(e.target.value)}/>
                <input type="submit" value="Submit" />  
            </form>
        </div>
        
    )
}

export default Submissions