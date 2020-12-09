import React from 'react'

function Education(props) {
    return (
        <form>
            <label>
                School:
                <input type='text' />
            </label>
            <label>
                Study:
                <input type='text' />
            </label>
            <label>
                Date:
                <input type='date' />
            </label>
            <button>Submit</button>
        </form>
    )
}

export default Education