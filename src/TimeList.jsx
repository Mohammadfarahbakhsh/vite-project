import "./style.css"
import Item from "./Item";
import { useContext } from "react";
import { TestContext } from "./testContext";

const TimeList=()=>{
    const context=useContext(TestContext)
    return(
        <div className="dash">
            {context.timeArr.map((c)=>{
                return (
                    <Item key={Math.random()}>{c}</Item>
                )
            })}
        </div>
    )
}
export default TimeList;