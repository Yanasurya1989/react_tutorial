import React, { useState } from "react";

const Dashboard = () => {
    const [counter, setCounter] = useState(0)
    console.log('render')
    const [show, setShow] = useState(false)

    const updateValueCounter = ()=>{
        const nextValue = counter + 1
        // setCounter("ini ganti angka nol")
        setCounter(nextValue)
    }

    const showComponent = ()=>{
        setShow(true)
    }

    const hideComponent = ()=>{
        setShow(false)
    }

    if(show){
        return(
            <div>
                <h1>Show Component</h1>
                <p>{counter}</p>
                <button onClick={updateValueCounter}>add</button>
                <button onClick={hideComponent}>Hide dong!</button>
            </div>
        )
    }
    
    return (
        <div>
            <h1>Hide Component</h1>
            <button onClick={showComponent}>show lagi dong!</button>
        </div>
    );
}

export default Dashboard;