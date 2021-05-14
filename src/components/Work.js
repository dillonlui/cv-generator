import React from "react";

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
            }]
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.addWork = this.addWork.bind(this)
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
                }
            ]
        }))
    }

    render() {
        let {workInputs} = this.state
        return (
            <div className="container">
                <h2>Work Experience</h2>
                <hr />
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
                        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
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
                        className="jobEnd lastInput"                          
                        placeholder="To"
                        />
                </form>
                </div>
                    )
                })
            }
            </div>
        )
    }
}