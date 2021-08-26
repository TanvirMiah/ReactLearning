import React, { Component } from 'react';

class RandomButton extends Component{
    constructor(props){
        super(props);
        this.state = {num: 0, won: false};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        let rand = Math.floor(Math.random() * 10);
        if (rand == 7){
            this.setState({won: true});
        }
        this.setState({num: rand});
    }
    
    render() {
        return (
            <div>
                <h1>Your number is : {this.state.num}</h1>
                {this.state.won ? <h1>You won!</h1> : <button onClick={this.handleClick}> Generate a random number </button>}
            </div>
        )
    }
}

export default RandomButton;