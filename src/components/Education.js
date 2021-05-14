import React from "react";

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
            }]
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.addEducation = this.addEducation.bind(this)
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
                }
        ]}))
    }

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
                                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
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
                                        className="schoolEnd lastInput"
                                        />
                                </form>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )}
    }