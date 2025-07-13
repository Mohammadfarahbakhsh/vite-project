import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


class Word extends React.Component{
    render(){
        return(
            <h1>
                {this.props.title}
            </h1>
        )
    }
}
export default Word;