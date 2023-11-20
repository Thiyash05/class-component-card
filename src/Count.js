import { Component } from "react";

class Count extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }

    increment(){
        this.setState({
            count:this.state.count+1
        })
    }

    decrement(){
        this.setState({
            count:this.state.count>0?this.state.count-1:0
        })
    }

    render(){
        return(
            <div className="count">
                <h2>{this.state.count}</h2>
                <button onClick={()=>this.increment()}>increment</button>
                <button onClick={()=>this.decrement()}>decrement</button>
            </div>
        )
    }
}

export default Count