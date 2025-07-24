import { useContext } from "react";
import { TestContext } from "./testContext";
import './style.css'

const Item=(props)=>{
    const context=useContext(TestContext)

    const deleteTime=(e)=>{
        context.setTimeArr(context.timeArr.filter(t=>t!==e.target.innerHTML))
    }
    return(
        <div className="timedel" onClick={deleteTime}>
            {props.children}
        </div>
    )
}
export default Item;