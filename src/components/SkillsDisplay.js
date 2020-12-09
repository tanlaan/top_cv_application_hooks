import React from 'react'

function SkillsDisplay(props) {
    const {setEdit, company, title, tasks, start, leave} = props
    return (
        <>
            <h3>{company}</h3>
            <p>Title: {title} -- Task: {tasks}</p>
            <p>Start: {start} -- Leave: {leave}</p>
            <button onClick={() => setEdit(true)}>Edit</button>
        </>

    )
}

export default SkillsDisplay