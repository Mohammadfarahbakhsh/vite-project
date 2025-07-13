import React, { StrictMode } from 'react'
import Time from './time';
import Word from './word';
import './style.css'
class App extends React.Component{
    constructor(){
        super();
        this.state={
            title:"hello welcome to our website"
        }
    }

    changer=()=>{
        this.setState({
            title:"congrats you login"
        })
    }



    render(){
        return(
            <div className='main'>
                <Word title={this.state.title}/>
                <Time changer={this.changer}/>
            </div>
        )
    }
    }
 export default App;
