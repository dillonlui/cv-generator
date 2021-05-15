import React from "react";
import WorkPreview from "./WorkPreview"

export default class Work extends React.Component {
    constructor(){
        super()
        this.state={
            workInputs: [{
                company: '',
                position: '',
                jobDescription: '',
                jobStart: '',
                jobEnd: '',
                isEdit: true
            }]
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.addWork = this.addWork.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e){
        let workInputs = [...this.state.workInputs]
        workInputs[e.target.dataset.id][e.target.className] = e.target.value
        this.setState({workInputs})
    }
    addWork(e) {
        this.setState((prevState) => ({
            workInputs: [...prevState.workInputs,
                {
                company: '',
                position: '',
                jobDescription: '',
                jobStart: '',
                jobEnd: '',
                isEdit: true
                }
            ]
        }))
    }
    handleClick(e) {
        e.preventDefault()
        let workInputs = [...this.state.workInputs]
        workInputs[e.target.id].isEdit = !this.state.workInputs[e.target.id].isEdit
        this.setState({workInputs})
    }

    render() {
        let {workInputs} = this.state
        return (
            <div className="container">
                <h2>Work Experience</h2>
                <hr />
                <div>
                    <button onClick={this.addWork}>Add Work</button>
                    {
                        workInputs.map((val, idx) => {
                            let companyId = `company-${idx}`,
                                positionId = `position-${idx}`,
                                jobDescriptionId = `jobDescription-${idx}`,
                                jobStartId = `jobStart-${idx}`,
                                jobEndId = `jobEndId-${idx}`
                        
                            return(
                                <div key={idx}>
                                <div>
                                <form onChange={this.handleChange} className={workInputs[idx].isEdit ? '' : 'hidden'}>
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
                                    <button id={idx} onClick={this.handleClick}>Save</button>
                                </form>
                                </div>
                                <div className={workInputs[idx].isEdit ? 'hidden' : ''}>
                                    <WorkPreview data={workInputs[idx]} />
                                    <button id={idx} onClick={this.handleClick}>Edit</button>
                                </div>
                            </div>
                    )
                })
            }
            </div>
            </div>
        )
    }
}