import React from "react"

const Level = ({counter}) => {
    switch (counter){
        case 1:
            return <p>Level rendah</p>
        case 2:
            return <p>level sedang</p>
        case 3:
            return <p>level tinggi</p>
        default:
            return <p>level tak terdefinisi</p>
    }
}

const Conditional = () => {
    const [counter, setCounter] = React.useState(1)

    const AddCounter = ()=>{
        setCounter(counter + 1)
    }
    // const [show, setShow] = React.useState(true)

    return(
        <div>
            <Level counter={counter}/>
            <button onClick={AddCounter}>Add counter</button>
        </div>
    )
    
    // const buttonToggle = ()=>{
    //     setShow(!show)
    // }

    // return (
    //     <div>
    //         {show && <p>view is showing</p>}
    //         {!show && <p>view is hiden</p>}
    //         <button onClick={buttonToggle}>show/hide</button>
    //     </div>
    // )
    
    // return show? <p>view is showing</p>:<p>view is showing</p>
    // let component
    // if (show) {
    //     component = <p>view is showing</p>
    // }else {
    //     component = <p>view is hide</p>
    // }

    // return (
    //     <div>
    //         <p>{component}</p>
    //         <button onClick={buttonToggle}>hide button</button>
    //     </div>
    // );
}

export default Conditional;