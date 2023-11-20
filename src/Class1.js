import { Component } from "react";

class Print extends Component{
    render(){
        return(
            <div>
                {this.props.children}
                <h4>The {this.props.name} is beautiful</h4>

            </div>
        )
    }
}

export default Print