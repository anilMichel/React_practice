import React, { useEffect, useState } from 'react'
import '../App.css';


const apiurl = "https://jsonplaceholder.typicode.com/users"
console.log(apiurl)

const ApiExample = () => {
    const [data, SetData] = useState([]);
    const dataHandler = async () => {
        const responseData = await fetch(apiurl);
        const newResponseData = await responseData.json();
        SetData(newResponseData);
    }
    useEffect(() => {
        console.log(dataHandler());
    }, [])
    console.log(data)
    return (
        <div>
            <h1>API Example using Fetch method (Async and Await) </h1>
            <h2>After getting the data from API displaying in the frontend</h2>
            <table>
                <thead>
                    <tr>
                        <th>S No.</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((person, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{person.name}</td>
                            <td>{person.phone}</td>
                            <td>{person.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ApiExample