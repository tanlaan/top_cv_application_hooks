import React, {useState} from 'react'

function General() {
    const [edit, setEdit] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')

    if (edit) {
        return (
        <GeneralEdit 
            setEdit={setEdit}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            telephone={telephone}
            setTelephone={setTelephone}
        />)
    }
    return (
    <GeneralDisplay 
        setEdit={setEdit}
        name={name}
        email={email}
        telephone={telephone}
    />)
}

function GeneralEdit(props) {
    const {setEdit, name, setName, email, setEmail, telephone, setTelephone} = props
    return (
        <form>
            <label>
                Name:
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Email:
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
                Phone:
                <input type='tel' value={telephone} onChange={(e) => setTelephone(e.target.value)} />
            </label>
            <button onClick={(e) => setEdit(false)}>Submit</button>
        </form>
    )

}

function GeneralDisplay(props) {
    const {setEdit, name, email, telephone} = props
    return(
        <div>
            <h2>{name}</h2>
            <p>Email: {email} -- Phone: {telephone}</p>
            <button onClick={(e) => setEdit(true)}>Edit</button>
        </div>
    )
}

export default General