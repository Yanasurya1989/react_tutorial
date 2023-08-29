import React from "react";

const FunctionalComponent = () => {
    const [counter, setCounter] = React.useState(0)

    const AddCounter = () => {
        const nextCounter = counter + 1
        setCounter(nextCounter)
    }

    return(
        <div>
            <h1>Functional Component</h1>
            <p>Ini merupakan functional component</p>
            <p>Counter: {counter}</p>
            <button onClick={AddCounter}>Add Counter</button>
        </div>
    )
}

export default FunctionalComponent