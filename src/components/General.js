import React from "react";
import GeneralPreview from "./GeneralPreview"

export default class General extends React.Component {
    constructor(){
        super()
        this.state = {
            name: '',
            location: '',
            email: '',
            phone: '',
            website: '',
            isEdit: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e){
        const { id, value} = e.target
        this.setState({[id]: value})
    }

    handleClick(e) {
        e.preventDefault()
        this.setState((prevState) => ({isEdit: !prevState.isEdit}))
    }

    render(){
    return (
        <div className="container">
            <h2>General Information</h2>
            <hr />
            <div className={this.state.isEdit ? '' : 'hidden'}>
                <div>
                <form>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Name" 
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                    <input 
                        type="text" 
                        id="location" 
                        placeholder="Location" 
                        value={this.state.location}
                        onChange={this.handleChange}
                        />
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Email" 
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                    <input 
                        type="tel" 
                        id="phone" 
                        placeholder="Phone Number" 
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                        value={this.state.phone}
                        onChange={this.handleChange}
                        />
                    <input 
                        type="text" 
                        id="website" 
                        placeholder="Website" 
                        value={this.state.website}
                        onChange={this.handleChange}
                        />
                    <button onClick={this.handleClick}>Save</button>
                </form>
                </div>
            </div>
            <div className={this.state.isEdit ? 'hidden' : ''}>
                <GeneralPreview data={this.state} />
                <button onClick={this.handleClick}>Edit</button>
            </div>
        </div>
    )}
}