import React, { Component } from 'react';

export default class Sum extends Component{

    constructor(){
        super()

        this.state = {
            num1: 0,
            num2: 0,
            sum: null
        }
    }

    handleChange1( value ){
        this.setState({ num1 : parseInt( value, 10) })
    }
    handleChange2( value ){
        this.setState({ num2 : parseInt( value, 10 ) })
    }

    addEm( num1, num2 ){
        this.setState({ sum: num1 + num2})
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4></h4>
                <input className="inputLine" onChange={ (e) => { this.handleChange1( e.target.value) } } placeholder="num1"/>
                <input className="inputLine" onChange={ (e) => { this.handleChange2( e.target.value) } } placeholder="num2"/>
                <button className="confirmationButton" onClick={ () => { this.addEm( this.state.num1, this.state.num2 ) } }>Add'Em</button>
                <span className="resultsBox">Sum: { this.state.sum }</span>
            </div>
        )
    }
}