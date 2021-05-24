import React, { useState } from "react";
import EducationPreview from "./EducationPreview"

const Education = () => {
    const blankEducation = {
        school: '',
        city: '',
        degree: '',
        schoolStart: '',
        schoolEnd: '',
        isEdit: true
    }

    const [educationState, setEducationState] = useState([{ ...blankEducation }])

    const addEducation = (e) => {
        e.preventDefault()
        setEducationState([...educationState, { ...blankEducation }])
    }

    const handleChange = (e) => {
        const updatedEducation = [...educationState]
        updatedEducation[e.target.dataset.id][e.target.className] = e.target.value
        setEducationState(updatedEducation)
    }

    const handleClick = (e) => {
        e.preventDefault()
        const updatedEducation = [...educationState]
        updatedEducation[e.target.id].isEdit = !educationState[e.target.id].isEdit
        setEducationState(updatedEducation)
    }

    return (
        <div className="container">
            <h2>Education</h2>
            <hr />
            <div>
                <button onClick={addEducation}>Add Education</button>
                {
                    educationState.map((val, idx) => {
                        let schoolId = `school-${idx}`,
                            cityId = `city-${idx}`,
                            degreeId = `degree-${idx}`,
                            schoolStartId = `schoolStart-${idx}`,
                            schoolEndId = `schoolEndId-${idx}`
                        return (
                            <div key={idx}>
                                <div>
                                    <form onChange={handleChange} className={educationState[idx].isEdit ? '' : 'hidden'}>
                                        <input
                                            type="text"
                                            id={schoolId}
                                            data-id={idx}
                                            placeholder="School"
                                            className="school"
                                        />
                                        <input
                                            type="text"
                                            id={cityId}
                                            data-id={idx}
                                            placeholder="City"
                                            className="city"
                                        />
                                        <input
                                            type="text"
                                            id={degreeId}
                                            data-id={idx}
                                            placeholder="Degree"
                                            className="degree"
                                        />
                                        <input
                                            type="text"
                                            id={schoolStartId}
                                            data-id={idx}
                                            placeholder="From"
                                            className="schoolStart"
                                        />
                                        <input
                                            type="text"
                                            id={schoolEndId}
                                            data-id={idx}
                                            placeholder="To"
                                            className="schoolEnd"
                                        />
                                        {/* <button id={idx} onClick={this.handleDelete}>Delete</button> */}
                                        <button id={idx} onClick={handleClick}>Save</button>
                                    </form>
                                </div>
                                <div className={educationState[idx].isEdit ? 'hidden' : ''}>
                                    <EducationPreview data={educationState[idx]} />
                                    <button id={idx} onClick={handleClick}>Edit</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Education