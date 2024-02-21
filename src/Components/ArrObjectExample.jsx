import React from 'react';
import { nestedData, Tempdata } from './Data';
import '../App.css';

// let arr=[
//     {
//         name:"Anil kumar",
//         place:"Palakonda",
//         statte:"Andhra Pradesh"
//     }
// ];

console.log(nestedData)


const ArrObjectExample = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {Tempdata.map((person, index) => (
          <tr key={index}>
            <td>{person.name}</td>
            <td>{person.phone}</td>
            <td>{person.email}</td>
            <td>{person.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ArrObjectExample