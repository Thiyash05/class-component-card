import { Component } from "react";

class Message extends Component{
    constructor(){
        super()
        this.state={
            Message:"Hello"
        }
    }

    changeMessage1(){
        this.setState({
            Message:"Welcome"
        })
    }

    changeMessage2(){
        this.setState({
            Message:"Welcome to the world"
        })
    }

    

    render(){
        return(
            <div className="msg-change">
                <h2>{this.state.Message}</h2>
                 <button onClick={()=>this.changeMessage1()}>Change Msg1</button>
                 <button onClick={()=>this.changeMessage2()}>Change Msg2</button>
            </div>
        )
    }
}

export default Message