import React, { useState } from "react";

const General = () => {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [website, setWebsite] = useState('')
    const [isEdit, setIsEdit] = useState(true)

    function handleClick(e) {
        e.preventDefault()
        setIsEdit(!isEdit)
    }

    return (
        <div className="container">
            <h2>General Information</h2>
            <hr />
            <div className={isEdit ? '' : 'hidden'}>
                <div>
                    <form>
                        <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            id="location"
                            placeholder="Location"
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                        />
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Phone Number"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                        <input
                            type="text"
                            id="website"
                            placeholder="Website"
                            value={website}
                            onChange={e => setWebsite(e.target.value)}
                        />
                        <button onClick={handleClick}>Save</button>
                    </form>
                </div>
            </div>
            <div className={isEdit ? 'hidden' : ''}>
                <h2>{name}</h2>
                <p>{location}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{website}</p>
                <button onClick={handleClick}>Edit</button>
            </div>
        </div>
    )
}

export default General