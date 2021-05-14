import React from "react";

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
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        const { id, value} = e.target
        this.setState({[id]: value})
    }

    render(){
    return (
        <div>
            <h2>General Information</h2>
            <form className="generalForm">
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
                    type="url" 
                    id="website" 
                    placeholder="Website" 
                    value={this.state.website}
                    onChange={this.handleChange}/>
                <input 
                    type="file" 
                    id="avatar" />
            </form>
            <h3>Your Information</h3>
            <p>{this.state.firstName}</p>
            <p>{this.state.lastName}</p>
            <p>{this.state.location}</p>
            <p>{this.state.email}</p>
            <p>{this.state.phone}</p>
            <p>{this.state.website}</p>
        </div>
    )}
}

export default General;