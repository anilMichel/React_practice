import React, { useState } from 'react'

const RegistrationPage = () => {
    const [data, setData] = useState({
        FirstName: '',
        LastName: '',
        MailId: '',
        NewPassword: '',
        RePassword: ''
    })
    const { FirstName, LastName, MailId, NewPassword, RePassword } = data;

    const ChnageHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const SubmitHandler = e => {
        e.preventDefault();
        if (NewPassword === RePassword) {
            console.log(data)
        }
        else {
            console.error("password is incorrect")
        }
    }

    return (
        <div>
            <h1>RegistrationPage</h1>
            <form onSubmit={SubmitHandler} >
                First Name : <input type="text" name="FirstName" id="FirstName" value={FirstName} onChange={ChnageHandler} /> <br /> <br />
                Last name : <input type="text" name="LastName" id="LastName" value={LastName} onChange={ChnageHandler} /> <br /> <br />
                E- Mail : <input type="email" name="MailId" id="MailId" value={MailId} onChange={ChnageHandler} /> <br /> <br />
                Password : <input type='password' name='NewPassword' value={NewPassword} onChange={ChnageHandler} /> <br /> <br />
                Re-Enter Password : <input type="password" name="RePassword" id="RePassword" value={RePassword} onChange={ChnageHandler} /> <br /> <br />
                <input type="submit" name="Register" />
            </form>
        </div>
    )
}

export default RegistrationPage