import React from "react";
import { useState } from "react";

function Submissions () {
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
        <div className="Main">
            <h1>Placeholder for Submisson Form</h1>
        </div>
        
    )
}

export default Submissions