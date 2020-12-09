import React from 'react'

function GeneralDisplay(props) {
    const {setEdit, name, email, telephone} = props
    
    return(
        <>
            <h2>{name}</h2>
            <p>Email: {email} -- Phone: {telephone}</p>
            <button onClick={(e) => setEdit(true)}>Edit</button>

        </>
    )
}

export default GeneralDisplay