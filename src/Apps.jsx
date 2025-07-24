import React, { StrictMode, useEffect, useState } from 'react'
import Time from './time';
import Word from './word';
import Button from './Button';
import TimeList from './TimeList';
import './style.css'
import { TestContext } from './testContext';
// class App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             title:"hello welcome to our website"
//         }
//     }

//     changer=()=>{
//         this.setState({
//             title:"congrats you login"
//         })
//     }



//     render(){
//         return(
//             <div className='main'>
//                 <Word title={this.state.title}/>
//                 <Time changer={this.changer}/>
//             </div>
//         )
//     }
//     }
const App=()=>{
    const[title,setTitle]=useState('onannnna')
        const dash=()=>{
        setTitle('welcome dash')
    }
    const[isLight,setIsLight]=useState(false)
    const Light=()=>{
        setIsLight(!isLight)
    }

    const [timeArr,setTimeArr]=useState([""])

    // useEffect(()=>{
    //     console.log("kazem")
    //     return()=>{}
        
    // },[isLight])


    return(
        <TestContext.Provider value={{
            
            timeArr,
            setTimeArr
        }}>
        <div className='main' style={{background:isLight?"white":"black"}}>
        <Button isLight={isLight} Light={Light}/>
         <Word title={title}/>
         <Time timeArr={timeArr} setTimeArr={setTimeArr} changer={dash}/>
        </div>
        </TestContext.Provider>
    )
}
 export default App;
