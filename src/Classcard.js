import { Component } from "react";

class Card extends Component{
    render(){
        const {foodDetail}=this.props
        const res=foodDetail.map((e)=>{
            return(
               
                    <div className="card-col">
                        <div className="card">
                            <h1>{e.name}</h1>
                            <h3>Place: {e.place}</h3>
                            <h4>Rating: {e.rating}</h4>
                            <h4>Price: {e.price}</h4>
                            <p>{e.line}</p>
                        </div>
                    </div>
               
            )
        })
        return(
            <div className="card-sec">
                <div className="card-container">
                    <div className="card-row">
                            {res}
                    
                    </div>
                </div>
            </div>
        )
    }
}
export default Card