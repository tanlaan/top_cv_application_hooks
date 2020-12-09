import React, { useState } from 'react'
import EducationDisplay from './EducationDisplay'
import EducationEdit from './EducationEdit'

function Education(props) {
    const [isEdit, setEdit] = useState(true)
    const [school, setSchool] = useState('')
    const [study, setStudy] = useState('')
    const [date, setDate] = useState('')

    return (
        <div id='education-info'>
            <h2>Education</h2>
            {
                isEdit
                ? <EducationEdit
                    setEdit={setEdit}
                    school={school}
                    setSchool={setSchool}
                    study={study}
                    setStudy={setStudy}
                    date={date}
                    setDate={setDate}
                />
                : <EducationDisplay
                    setEdit={setEdit}
                    school={school}
                    study={study}
                    date={date}
                />
            }
        </div> 
    )
}

export default Education