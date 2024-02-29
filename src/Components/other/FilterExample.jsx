import React from 'react'

const FilterExample = () => {

    //array with string values 
    const names = ["anil", "akash", "akshra", "jagadeesh", "kumar"]
    const FilteredNames = names.filter((item) => {
        return (item.includes("a") + " ")
    })

    // array with values

    const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90]
    const FilteredValues = arr.filter((item) => {
        return (item > 30)
    })
    return (
        <div>FilterExample
            <br />
            <h2>{FilteredNames}</h2>
            <h2>{FilteredValues}</h2>
        </div>
    )
}

export default FilterExample