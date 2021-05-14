import React from "react";
import EducationPreview from "./EducationPreview"

export default class Education extends React.Component {
    constructor(){
        super()
        this.state={
            numEdForm: 1,
            school: '',
            city: '',
            degree: '',
            schoolStart: '',
            schoolEnd: '',
            isEdit: true
        }
        this.educationForm = this.educationForm.bind(this)
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

    educationForm() {
        return (
            <div>
                <div className="inputForm">
                <form onSubmit={this.handleSubmit} style={{display: this.state.isEdit ? 'block' : 'none'}}>
                    <input 
                        type="text" 
                        id="school" 
                        placeholder="School" 
                        onChange={this.handleChange}/>
                    <input 
                        type="text" 
                        id="city" 
                        placeholder="City" 
                        onChange={this.handleChange}/>
                    <input 
                        type="text" 
                        id="degree" 
                        placeholder="Degree" 
                        onChange={this.handleChange}/> 
                        <input 
                            type="text" 
                            id="schoolStart" 
                            placeholder="From"
                            onChange={this.handleChange}/>
                        <input 
                            type="text" 
                            id="schoolEnd"
                            placeholder="To" 
                            onChange={this.handleChange}/>
                    <button>Save</button>
                </form>
                </div>
                <div>
                    <div style={{display: this.state.isEdit ? 'none' : 'block'}}>
                        <EducationPreview data={this.state} />
                    <button onClick={this.handleSubmit}>Edit</button>
                    </div>
                </div>
            </div>
        )
    }


    render() {
        return (
            <div className="container">
                <h2>Education</h2>
                <hr />
                {this.educationForm()}
            </div>
        )
    }
}