import React, { useState } from "react";
import WorkPreview from "./WorkPreview"

const Work = () => {
    const blankWork = {
        company: '',
        position: '',
        jobDescription: '',
        jobStart: '',
        jobEnd: '',
        isEdit: true
    }

    const [workState, setWorkState] = useState([{ ...blankWork }])

    const addWork = (e) => {
        e.preventDefault()
        setWorkState([...workState, { ...blankWork }])
    }

    const handleChange = (e) => {
        e.preventDefault()
        const updatedWork = [...workState]
        updatedWork[e.target.dataset.id][e.target.className] = e.target.value
        setWorkState(updatedWork)
    }

    const handleClick = (e) => {
        e.preventDefault()
        const updatedWork = [...workState]
        updatedWork[e.target.id].isEdit = !workState[e.target.id].isEdit
        setWorkState(updatedWork)
    }

    return (
        <div className="container">
            <h2>Work Experience</h2>
            <hr />
            <div>
                <button onClick={addWork}>Add Work</button>
                {
                    workState.map((val, idx) => {
                        let companyId = `company-${idx}`,
                            positionId = `position-${idx}`,
                            jobDescriptionId = `jobDescription-${idx}`,
                            jobStartId = `jobStart-${idx}`,
                            jobEndId = `jobEndId-${idx}`

                        return (
                            <div key={idx}>
                                <div>
                                    <form onChange={handleChange} className={workState[idx].isEdit ? '' : 'hidden'}>
                                        <input
                                            type="text"
                                            id={companyId}
                                            data-id={idx}
                                            className="company"
                                            placeholder="Company Name"
                                        />
                                        <input
                                            type="text"
                                            id={positionId}
                                            data-id={idx}
                                            className="position"
                                            placeholder="Position Title"
                                        />
                                        <textarea
                                            id={jobDescriptionId}
                                            data-id={idx}
                                            className="jobDescription"
                                            placeholder="Job Description"
                                        />
                                        <input
                                            type="text"
                                            id={jobStartId}
                                            data-id={idx}
                                            className="jobStart"
                                            placeholder="From"
                                        />
                                        <input
                                            type="text"
                                            id={jobEndId}
                                            data-id={idx}
                                            className="jobEnd"
                                            placeholder="To"
                                        />
                                        <button id={idx} onClick={handleClick}>Save</button>
                                    </form>
                                </div>
                                <div className={workState[idx].isEdit ? 'hidden' : ''}>
                                    <WorkPreview data={workState[idx]} />
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

export default Work