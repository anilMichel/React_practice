import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ExampleAxious = () => {
    const [resData, setResData] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            res => setResData(res.data)
        )
    }, [])
    console.log(resData)
    return (
        <div>
            {resData.map((item, index) => {
                return(
                    <div>
                        <h4>{item.name}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default ExampleAxious