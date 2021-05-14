import React from "react";

export default class General extends React.Component {
    constructor(){
        super()
        this.state = {
            name: '',
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
        <div className="container">
            <h2>General Information</h2>
            <hr />
            <div className="inputForm">
                <div>
                <form onChange={this.handleChange}>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Name" 
                        value={this.state.name}
                        />
                    <input 
                        type="text" 
                        id="location" 
                        placeholder="Location" 
                        value={this.state.location}
                        />
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Email" 
                        value={this.state.email}
                        />
                    <input 
                        type="tel" 
                        id="phone" 
                        placeholder="Phone Number" 
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                        value={this.state.phone}
                        />
                    <input 
                        type="text" 
                        id="website" 
                        placeholder="Website" 
                        value={this.state.website}
                        />
                </form>
                </div>
            </div>
        </div>
    )}
}