import React from 'react'

function Skills(props) {
    return (
        <form>
            <label>
                Company:
                <input type='text' />
            </label>
            <label>
                Job Title:
                <input type='text' />
            </label>
            <label>
                Tasks:
                <input type='text' />
            </label>
            <label>
                Start Date:
                <input type='date' />
            </label>
            <label>
                Leave Date:
                <input type='date' />
            </label>
            <button>Submit</button>
        </form>
    )
}

export default Skills