import React from 'react'

function EducationDisplay(props) {
    const {setEdit, school, study, date} = props

    return (
        <>
            <h3>{school}</h3>
            <p>Study: {study} -- Date: {date}</p>
            <button onClick={() => setEdit(true)}>Edit</button>
        </>
    )
}

export default EducationDisplay