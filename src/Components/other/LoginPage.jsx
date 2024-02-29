import axios from 'axios';
import React, { useState } from 'react'

const LoginPage = () => {
    const fireBaseURL = 'https://practice-d689c-default-rtdb.firebaseio.com/login.json';
    const [data, setData] = useState(
        {
            username: '',
            password: ''
        }
    )
    const { username, password } = data;
    const ChangeHandler = e => {
        setData({ ...data, [e.target.name]: [e.target.value] })
    }
    const Loginhandler = e => {
        e.preventDefault();
        console.log(data)
        axios.post(fireBaseURL, data).then(() => alert("data posted"))
        //posting the data into datbase using fetch
        // fetch(fireBaseURL, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         // Add any other headers if needed
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error(`HTTP error! Status: ${response.status}`);
        //         }
        //         return response.json();
        //     })
        //     .then(() => alert('Data posted'))
        //     .catch(error => console.error('Error:', error));
    }
    return (
        <div>
            <form onSubmit={Loginhandler}>
                <input type="text" name="username" id="username" onChange={ChangeHandler} value={username} /> <br /> <br />
                <input type="password" name="password" id="password" value={password} onChange={ChangeHandler} /> <br /> <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default LoginPage