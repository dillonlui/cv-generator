import React from "react"

export default function WorkPreview(props) {
    return(
        <div>
            <h3>{props.data.position}</h3>
            <p>{props.data.company}</p>
            <p>{props.data.jobStart} to {props.data.jobEnd}</p>
            <p>{props.data.jobDescription}</p>
        </div>
    )
}