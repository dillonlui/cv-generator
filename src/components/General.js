import React from "react";
import GeneralPreview from "./GeneralPreview"

class General extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            location: '',
            email: '',
            phone: '',
            website: '',
            isEdit: true
        }
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

    render(){
    return (
        <div className="container">
            <h2>General Information</h2>
            <hr />
            <div className="inputForm">
                <div>
                <form onSubmit={this.handleSubmit} style={{display: this.state.isEdit ? 'block' : 'none'}}>
                <input 
                    type="text" 
                    id="firstName" 
                    placeholder="First Name" 
                    value={this.state.firstName}
                    onChange={this.handleChange}/>
                <input 
                    type="text" 
                    id="lastName" 
                    placeholder="Last Name" 
                    value={this.state.lastName}
                    onChange={this.handleChange}/>
                <input 
                    type="text" 
                    id="location" 
                    placeholder="Location" 
                    value={this.state.location}
                    onChange={this.handleChange}/>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="Email" 
                    value={this.state.email}
                    onChange={this.handleChange}/>
                <input 
                    type="tel" 
                    id="phone" 
                    placeholder="Phone Number" 
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                    value={this.state.phone}
                    onChange={this.handleChange}/>
                <input 
                    type="text" 
                    id="website" 
                    placeholder="Website" 
                    value={this.state.website}
                    onChange={this.handleChange}/>
                <button>Save</button>
                </form>
                </div>
            </div>
            <div style={{display: this.state.isEdit ? 'none' : 'block'}}>
                <GeneralPreview data={this.state} />
                <button onClick={this.handleSubmit}>Edit</button>
            </div>
        </div>
    )}
}

export default General;