import React from 'react'

function GeneralEdit(props) {
    const {setEdit, name, setName, email, setEmail, telephone, setTelephone} = props
    
    return (
        <form>
            <label>
                Name:
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
                Email:
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Phone:
                <input type='tel' value={telephone} onChange={(e) => setTelephone(e.target.value)} />
            </label>
            <br />
            <button onClick={(e) => setEdit(false)}>Submit</button>
        </form>
    )

}

export default GeneralEdit