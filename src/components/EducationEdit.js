import React from 'react'

function EducationEdit(props) {
    const {setEdit, school, setSchool, study, setStudy, date, setDate} = props
    return (
        <form>
            <label>
                School:
                <input type='text' value={school} onChange={(e) => setSchool(e.target.value)} />
            </label>
            <br />
            <label>
                Study:
                <input type='text' value={study} onChange={(e) => setStudy(e.target.value)} />
            </label>
            <br />
            <label>
                Date:
                <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
            </label>
            <br />
            <button onClick={() => setEdit(false)}>Submit</button>
        </form>
    )

}

export default EducationEdit