import React, {useState} from 'react'
import GeneralDisplay from './GeneralDisplay'
import GeneralEdit from './GeneralEdit'

function General() {
    const [isEdit, setEdit] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')

    return (
        <div id="general-info">
            {
                isEdit 
                ? <GeneralEdit 
                    setEdit={setEdit}
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    telephone={telephone}
                    setTelephone={setTelephone}
                />
                : <GeneralDisplay 
                    setEdit={setEdit}
                    name={name}
                    email={email}
                    telephone={telephone}
                />
            }
        </div>
    )
}

export default General