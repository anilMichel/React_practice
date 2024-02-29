import React from 'react'
import { Tempdata } from '../Pages/Data';

const MapExample = () => {
    return (
        <div>
            {Tempdata.map((value, index) => {
                return (
                    <div key={index}>
                        <li>{value.name}</li> <br />
                    </div>
                )
            })}
        </div>
    )
}

export default MapExample