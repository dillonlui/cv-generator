import React, { useState } from "react";

const General = () => {

    const [generalState, setGeneralState] = useState(
        {
            name: '',
            location: '',
            email: '',
            phone: '',
            website: '',
            isEdit: true
        }
    )

    const handleGeneralChange = (e) => setGeneralState({
        ...generalState,
        [e.target.name]: [e.target.value]
    })

    const handleClick = (e) => {
        e.preventDefault()
        setGeneralState({
            ...generalState,
            isEdit: !generalState.isEdit
        })
    }

    return (
        <div className="container">
            <h2>General Information</h2>
            <hr />
            <div className={generalState.isEdit ? '' : 'hidden'}>
                <div>
                    <form>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={generalState.name}
                            onChange={handleGeneralChange}
                        />
                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={generalState.location}
                            onChange={handleGeneralChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={generalState.email}
                            onChange={handleGeneralChange}
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            value={generalState.phone}
                            onChange={handleGeneralChange}
                        />
                        <input
                            type="text"
                            name="website"
                            placeholder="Website"
                            value={generalState.website}
                            onChange={handleGeneralChange}
                        />
                        <button onClick={handleClick}>Save</button>
                    </form>
                </div>
            </div>
            <div className={generalState.isEdit ? 'hidden' : ''}>
                <h2>{generalState.name}</h2>
                <p>{generalState.location}</p>
                <p>{generalState.email}</p>
                <p>{generalState.phone}</p>
                <p>{generalState.website}</p>
                <button onClick={handleClick}>Edit</button>
            </div>
        </div>
    )
}

export default General