import React from "react"
import "./style.css"

class Button extends React.Component{
    render(){
        return(
        <div>
        <button className="change" style={{background:this.props.isLight?"black":"white",color:this.props.isLight?"white":"black"}} onClick={this.props.Light}>
        Hello {this.props.isLight?"light":"dark"}
        </button>
        </div>
        )
    }
}
export default Button;