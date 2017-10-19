import React, { Component } from 'react';

export default class Palindrome extends Component{

    constructor(){
        super()

        this.state ={
            userInput: "",
            palindrome: ""
        }
    }

    handleChange( val ){
        this.setState({ userInput : val })
    }

    isPalindrome( str ){
        console.log("userInput:", str)
        let forward = str
        let backwards = str

        backwards = backwards.split("")
        backwards = backwards.reverse()
        backwards = backwards.join("")

        if( forward === backwards ){
            this.setState({ palindrome : 'true' })
        } else this.setState({ palindrome: 'false' })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={ (e) => { this.handleChange( e.target.value )} }/>
                <button className="confirmationButton" onClick={ () => this.isPalindrome( this.state.userInput ) }>Reversify?!</button>
                <span className="resultBox">Palindrome: { this.state.palindrome }</span>
            </div>
        )
    }
}