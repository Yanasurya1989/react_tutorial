import React, {Component} from "react";

class EventClass extends Component {
    state = {
        counter: 0
    }

    handlerClick (){
        console.log("clicked")
        const {counter} = this.state
        this.setState({counter: counter + 1})
    }
    render(){
        console.log(this.state.counter)
        return(
            <div>
                <button 
                    style={{height: 100, width: 250, fontSize: 32}}
                    onClick={this.handlerClick.bind(this)}>Click me
                </button>
            </div>
        )
    }
}
export default EventClass