import React from 'react'

function SkillsEdit(props) {
    const {setEdit, company, setCompany, title, setTitle, tasks, setTasks, start, setStart, leave, setLeave} = props

    return (
        <form>
            <label>
                Company:
                <input type='text' value={company} onChange={(e) => setCompany(e.target.value)} />
            </label>
            <br />
            <label>
                Job Title:
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value) }/>
            </label>
            <br />
            <label>
                Tasks:
                <input type='text' value={tasks} onChange={(e) => setTasks(e.target.value)} />
            </label>
            <br />
            <label>
                Start Date:
                <input type='date' value={start} onChange={(e) => setStart(e.target.value)} />
            </label>
            <br />
            <label>
                Leave Date:
                <input type='date' value={leave} onChange={(e) => setLeave(e.target.value)} />
            </label>
            <br />
            <button onClick={() => setEdit(false)}>Submit</button>
        </form>
    )
}

export default SkillsEdit