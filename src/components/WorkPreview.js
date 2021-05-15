import React from "react"

export default function WorkPreview(props) {
    return(
        <div>
            <h2>{props.data.company}</h2>
            <h3>{props.data.position}</h3>
            <p>{props.data.jobDescription}</p>
            <p>{props.data.jobStart} to {props.data.jobEnd}</p>
        </div>
    )
}