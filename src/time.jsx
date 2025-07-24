import React, { StrictMode } from 'react'
import './style.css'
import TimeList from './TimeList';
import { createRoot } from 'react-dom/client'
import { TestContext } from './testContext';
import { createContext } from 'react';

let interval;
class Time extends React.Component{
    constructor(){
        super();

        this.state={
            second:0,
            minute:0,
            hour:0,
            isStart:false

        }
    }

    static contextType=TestContext;

    startInterval=()=>{
    if(this.state.isStart==false){
        this.setState({
        isStart:true
        })
        interval= setInterval(()=>{
        this.setState({
        second:this.state.second+1
        })
        if(this.state.second==60){
            this.setState({
                second:0,
                minute:this.state.minute+1
            })
        }
            if(this.state.minute==60){
            this.setState({
            minute:0,
            hour:this.state.hour+1
            })
        }
        },1000)
    
    }
    }
    stopInterval=()=>{
    this.setState({
    isStart:false

    })
    clearInterval(interval)
    }
    resetInterval=()=>{
        this.stopInterval();
        this.setState({
            second:0,
            minute:0,
            hour:0,
        })  
    }
    SaveTime=()=>{
        let newTime=document.querySelector('.timer').innerHTML
        this.context.setTimeArr([...this.context.timeArr,newTime])
    }
        render(){
        let s=this.state.second
        let m=this.state.minute
        let h=this.state.hour
        return(
            <>
            <div>
                <h2 className='timer' onClick={this.SaveTime}>
                {`${h>9?h:"0"+h} : ${m>9?m:"0"+m} : ${s>9?s:"0"+s}`}
            </h2>
            <button className='change' onClick={this.props.changer}>change</button>
            <button className='change' onClick={this.startInterval}>start</button>
            <button className='change' onClick={this.stopInterval}>stop</button>
            <button className='change' onClick={this.resetInterval}>reset</button>
            </div>
            <TimeList/>
        </>
        )
    }
}
export default Time;

