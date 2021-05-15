import React from "react"

export default function GeneralPreview(props) {
    return(
        <div>
            <h2>{props.data.name}</h2>
            <p>{props.data.location}</p>
            <p>{props.data.email}</p>
            <p>{props.data.phone}</p>
            <p>{props.data.website}</p>
        </div>
    
    )
}