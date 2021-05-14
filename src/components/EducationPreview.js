import React from "react"

export default function EducationPreview(props) {
    return(
        <div>
            <h3>{props.data.school}</h3>
            <p>{props.data.city}</p>
            <h4>{props.data.degree}</h4>
            <p>{props.data.schoolStart} to {props.data.schoolEnd}</p>
        </div>
    )
}