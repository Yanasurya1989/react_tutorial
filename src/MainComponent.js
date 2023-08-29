import React, {Component} from "react";

class MainComponent extends Component {
    state = {
        counter : 0
    }

    AddCounter = () => {
        const {counter} = this.state
        const nextCounter = counter + 1
        this.setState({counter: nextCounter})
    }

    render(){
        const {counter} = this.state
        return(
            <div>
                <h1>Class Component</h1>
                <p>Ini merupakan class component, digunakan jika terdapat componen atau logic yg kompleks</p>
                <p>Counter : {counter}</p>
                <button onClick={this.AddCounter}>Add Counter</button>
            </div>
        )
    }
}

export default MainComponent