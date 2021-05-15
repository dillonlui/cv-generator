import React from "react"

export default function EducationPreview(props) {
    return(
        <div>
            <h2>{props.data.school}</h2>
            <p>{props.data.city}</p>
            <h3>{props.data.degree}</h3>
            <p>{props.data.schoolStart} to {props.data.schoolEnd}</p>
        </div>
    )
}