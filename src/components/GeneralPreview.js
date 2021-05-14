import React from "react"

export default function GeneralPreview(props) {
    return(
        <div id="generalPreview">
            <h3>{props.data.firstName} {props.data.lastName}</h3>
            <h4>{props.data.location}</h4>
            <p>{props.data.email}</p>
            <p>{props.data.phone}</p>
            <p>{props.data.website}</p>
        </div>
    )
}