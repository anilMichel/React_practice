import React, { useState } from 'react'

const Calculator = () => {
    const [inputExpression, setInputExpression] = useState("");
    const textHandler = e => {
        setInputExpression(e.target.value);
    }
    // let result;

    // try {
    //     result = new Function('return ' + inputExpression)();
    // } catch (error) {
    //     // Handle the error if needed
    //     console.error(error.message);
    // }

    return (
        <div>
            <input type="text" name="inputExp" id="inputExp" value={inputExpression} onChange={textHandler} /> <br />
        </div>
    )
}

export default Calculator