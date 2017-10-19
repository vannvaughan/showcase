import React, { Component } from 'react';

export default class FilterString extends Component{

    constructor () {
        super()
        
        this.state = {
            unfilteredArray: ["Google Pixel", "Apple iPhone", "Samsung S8", "Google Pixel 2"],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange( val ){
        this.setState({ userInput : val })
    }

    filterArray( prop ){
        let unfilteredArray = this.state.unfilteredArray
        let arr = []

        for ( let i = 0; i < unfilteredArray.length; i++){
            if ( unfilteredArray[i].includes( prop )){
                arr.push( unfilteredArray[i] )
            }
        }

        this.setState({ filteredArray : arr })

    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Originals: { JSON.stringify( this.state.unfilteredArray, null, 10 )}</span>
                <input className="inputLine" onChange={ (e) => { this.handleChange( e.target.value ) }}/>
                <button className="confirmationButton" onClick={ () => { this.filterArray( this.state.userInput ) }}> Filter </button>
                <span className="resultsBox filterStringPB">filterArray: { JSON.stringify( this.state.filteredArray )}</span>                
            </div>
        )
    }
}