import React from "react";
import EducationPreview from "./EducationPreview"

export default class Education extends React.Component {
    constructor(){
        super()
        this.state={
            educationInputs: [{
                school: '',
                city: '',
                degree: '',
                schoolStart: '',
                schoolEnd: '',
                isEdit: true
            }]
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.addEducation = this.addEducation.bind(this)
        this.handleClick = this.handleClick.bind(this)
        // this.handleDelete = this.handleDelete.bind(this)
    }

    handleChange(e){
        let educationInputs = [...this.state.educationInputs]
        educationInputs[e.target.dataset.id][e.target.className] = e.target.value
        this.setState({educationInputs})
    }
    addEducation(e) {
        this.setState((prevState) => ({
            educationInputs: [...prevState.educationInputs, 
                {school: '',
                city: '',
                degree: '',
                schoolStart: '',
                schoolEnd: '',
                isEdit: true
                }
        ]}))
    }
    handleClick(e) {
        e.preventDefault()
        let educationInputs = [...this.state.educationInputs]
        educationInputs[e.target.id].isEdit = !this.state.educationInputs[e.target.id].isEdit
        this.setState({educationInputs})
    }
    // Need to figure out delate functionality, currently bugs out preview after deleting
    //
    // handleDelete(e) {
    //     e.preventDefault()
    //     let educationInputs = this.state.educationInputs.splice(e.target.id, 1)
    //     this.setState({educationInputs})
    // }

    render() {
        let {educationInputs} = this.state
        return (
            <div className="container">
                <h2>Education</h2>
                <hr />
                <div>
                    <button onClick={this.addEducation}>Add Education</button>
                    {
                        educationInputs.map((val, idx) => {
                            let schoolId = `school-${idx}`,
                                cityId = `city-${idx}`,
                                degreeId = `degree-${idx}`,
                                schoolStartId = `schoolStart-${idx}`,
                                schoolEndId = `schoolEndId-${idx}`
                            
                            return( 
                                <div key={idx}>
                                <div>
                                <form onChange={this.handleChange} className={educationInputs[idx].isEdit ? '' : 'hidden'}>
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
                                    <button id={idx} onClick={this.handleClick}>Save</button>
                                </form>
                                </div>
                                <div className={educationInputs[idx].isEdit ? 'hidden' : ''}>
                                    <EducationPreview data={educationInputs[idx]} />
                                    <button id={idx} onClick={this.handleClick}>Edit</button>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        )}
    }