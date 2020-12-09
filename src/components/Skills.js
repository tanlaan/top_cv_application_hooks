import React, { useState } from 'react'
import SkillsDisplay from './SkillsDisplay'
import SkillsEdit from './SkillsEdit'

function Skills(props) {
    const [isEdit, setEdit] = useState(true)
    const [company, setCompany] = useState('')
    const [title, setTitle] = useState('')
    const [tasks, setTasks] = useState('')
    const [start, setStart] = useState('')
    const [leave, setLeave] = useState('')

    return (
        <div skills-info>
            <h2>Skills</h2>
            {
                isEdit
                ? <SkillsEdit 
                    setEdit={setEdit}
                    company={company}
                    setCompany={setCompany}
                    title={title}
                    setTitle={setTitle}
                    tasks={tasks}
                    setTasks={setTasks}
                    start={start}
                    setStart={setStart}
                    leave={leave}
                    setLeave={setLeave}
                />
                : <SkillsDisplay
                    setEdit={setEdit}
                    company={company}
                    title={title}
                    tasks={tasks}
                    start={start}
                    leave={leave}
                />
            }
        </div>

    )
}

export default Skills