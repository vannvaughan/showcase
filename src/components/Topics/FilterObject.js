import React, { Component } from 'react';

export default class FilterObject extends Component{
    constructor() {
        super()

        this.state = {
            trucks: [
                {
                    make: 'Ford',
                    model: 'F150',
                    year: 2016    
                },
                {
                    make: 'Dodge',
                    model: '1500',
                    year: 2017
                },
                {
                    make: 'Chevy',
                    model: 'Denali HD',
                    year: 2016
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange( val ){
        this.setState({ userInput: val })
    }

    filterArray( prop ){
        let trucks = this.state.trucks
        let arr = []

        for ( let i = 0; i < trucks.length; i ++ ){

            if( trucks[i].hasOwnProperty( prop ) ){
                arr.push( trucks[i] )
            }
        }

        this.setState({ filteredArray : arr })
    }

    render() {
        return (        
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.trucks, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterArray(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
            </div>
        )
    }
}