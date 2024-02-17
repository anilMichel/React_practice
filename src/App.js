import './App.css';
import React, { useState, useEffect } from 'react';
// import StaMgmt from './Components/StaMgmt';

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{console.log("clicked")},[count])
  return (
    <div className="App">
      {count} <br />  <br />
      <button onClick={()=>setCount(count+1)}>Penchuko ra..</button>
      
    </div>
  );
}

export default App;