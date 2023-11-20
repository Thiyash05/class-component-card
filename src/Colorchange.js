import { Component } from "react";

class Colorchange extends Component{
    constructor(){
        super()
        this.state={
            make:"Yamaha",
            model:"R15",
            color:"blue"
        }
    }

    changeColor(){
        this.setState({
            color:"yellow"
        })
    }

    render(){
        return(
            <div className="color-change">
                <h2>{this.state.color}</h2>
                <button onClick={()=>this.changeColor()}>Change</button>
            </div>
        )
    }
}

export default Colorchange