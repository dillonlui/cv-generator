import React from "react";

const General = () => {
    return (
        <div>
            <h2>General Information</h2>
            <form className="generalForm">
                <input type="text" id="firstName" placeholder="First Name" />
                <input type="text" id="lastName" placeholder="Last Name" />
                <input type="text" id="location" placeholder="Location" />
                <input type="email" id="email" placeholder="Email" />
                <input type="tel" id="phone" placeholder="Phone Number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                <input type="url" id="website" placeholder="Website" />
                <input type="file" id="avatar" />
            </form>
        </div>
    )
}

export default General;