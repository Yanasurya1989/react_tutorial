import React, {Component} from "react";

class Home extends Component {
    state = {
        mangnanav: 'mau fetching',
        counter: 0
    }

    misalfetching = () => {
        this.setState({mangnanav: 'siap fetching'})
    }

    gantiCounternya = ()=>{
        const {counter} = this.state
        console.log("render")
        this.setState({counter: counter + 1})
        // this.setState((prevState) => ({
        //     ...prevState,
        //     counter: "kemudian ini"
        // }))
    }

    render(){
        const { counter, mangnanav } = this.state

        if(mangnanav === 'mau fetching'){
            return (
                <div>
                    <p>ngalawading...</p>
                    <button onClick={this.misalfetching}>Tampilkan</button>
                </div>
            )                
        }

        return (
            <div>
                <h1>Counter</h1>
                <p>{counter}</p>
                <button onClick={this.gantiCounternya}>ganti</button>
            </div>
        )
            
    }
}

export default Home