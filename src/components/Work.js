import React from "react";
import WorkPreview from "./WorkPreview"

export default class Work extends React.Component {
    constructor(){
        super()
        this.state={
            numWorkForm: 1,
            company: '',
            position: '',
            jobDescription: '',
            jobStart: '',
            jobEnd: '',
            isEdit: true
        }
        this.workForm = this.workForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        const { id, value} = e.target
        this.setState({[id]: value})
    }
    handleSubmit(e){
        e.preventDefault()
        this.setState( {isEdit: !this.state.isEdit})
    }

    workForm() {
        return (
            <div>
                <div className="inputForm">
                <form onSubmit={this.handleSubmit} style={{display: this.state.isEdit ? 'block' : 'none'}}>
                    <input 
                        type="text" 
                        id="company" 
                        placeholder="Company Name" 
                        onChange={this.handleChange}/>
                    <input 
                        type="text" 
                        id="position" 
                        placeholder="Position Title" 
                        onChange={this.handleChange}/>
                    <textarea  
                        id="jobDescription" 
                        placeholder="Job Description" 
                        onChange={this.handleChange}/>
                    <input 
                        type="text" 
                        id="jobStart" 
                        placeholder="From"
                        onChange={this.handleChange}/>
                    <input 
                        type="text" 
                        id="jobEnd"                            
                        placeholder="To"
                        onChange={this.handleChange}/>
                    <button>Save</button>
                </form>
                </div>
                <div>
                    <div style={{display: this.state.isEdit ? 'none' : 'block'}}>
                        <WorkPreview data={this.state} />
                    <button onClick={this.handleSubmit}>Edit</button>
                    </div>
                </div>
            </div>
        )
    }


    render() {
        return (
            <div className="container">
                <h2>Work Experience</h2>
                <hr />
                {this.workForm()}
            </div>
        )
    }
}