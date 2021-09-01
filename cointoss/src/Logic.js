import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from "./helpers";

class Logic extends Component{
    static defaultProps = {
        coins: [
            {side: 'heads', imgSrc: "https://koobr.com/wp-content/uploads/2016/10/vector_icon_classic_sonic_set4_by_nibroc_rock-d9pordj.png"},
            {side: 'tails', imgSrc: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0e738c17-7f3c-422e-8225-f8c782b08626/d8obgka-d495bd45-ad15-48a3-8584-a065e9682afa.png/v1/fill/w_894,h_894,strp/vector_icon_tails_by_nibroc_rock_d8obgka-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMGU3MzhjMTctN2YzYy00MjJlLTgyMjUtZjhjNzgyYjA4NjI2XC9kOG9iZ2thLWQ0OTViZDQ1LWFkMTUtNDhhMy04NTg0LWEwNjVlOTY4MmFmYS5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.C0Acu1EtA2wYm6GtQCtlRrUANXD8t0761A5VnctvoSg"}
        ]
    }
    constructor(props){
        super(props);
        this.state = {
            total: 0,
            totTails: 0,
            totHeads: 0,
            currCoin: null
        }
        this.handleClick = this.handleClick.bind(this);
    }
    flip(){
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                total: st.total + 1,
                totHeads : st.totHeads + (newCoin.side === "heads" ? 1 : 0),
                totTails : st.totTails + (newCoin.side === "tails" ? 1 : 0)
            };
        })
    }
    handleClick(e){
        this.flip();
    }

    render(){
        return (
            <div className="Logic">
                <h1>Let's flip a coin</h1>
                {this.state.currCoin && <Coin info={this.state.currCoin}/>}
                <button onClick={this.handleClick}>Flip me</button>
                <p>Out of {this.state.total} flips, there have been {this.state.totHeads} heads and {this.state.totTails} tails.</p>
            </div>
        )
    }
}

export default Logic;