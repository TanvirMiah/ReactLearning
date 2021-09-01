import React, { Component } from 'react';
import "./Coin.css";


class Coin extends Component{
    render() {
        return (
            <div className="Coin">
                <img src={this.props.info.imgSrc} alt={this.props.info.side} />
                <h1>You got a {this.props.info.side}</h1>
            </div>
        )
    }
}

export default Coin;