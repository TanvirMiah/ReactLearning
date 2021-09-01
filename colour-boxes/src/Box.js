import React, { Component } from 'react';
import './Box.css'
import {choice} from './helpers'; 

class Box extends Component{
    static defaultProps = {
        allColours: ["purple", "magenta", "violet", "pink"]
    }
    constructor(props){
        super(props);
        this.state = {colour: choice(this.props.colours)}
        this.handleClick = this.handleClick.bind(this);
    }
    pickColor(){
        let newColour;
        do {
            newColour = choice(this.props.colours);
        } while (newColour === this.state.colour);
        
        this.setState({colour: newColour});
    }

    handleClick(){
        this.pickColor();
    }
    render(){
        return(
            <div className="Box" style={{backgroundColor: this.state.colour}} onClick={this.handleClick}>

            </div>
        )
    }
}

export default Box;