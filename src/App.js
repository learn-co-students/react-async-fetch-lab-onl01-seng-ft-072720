// create your App component here
import React, { Component } from 'react'

export default class App extends Component{

    constructor(){
        super()
        this.state= {}
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json)
        .then(data => this.setState(data))
    }

    render(){
        <h1>{this.state}</h1>
    }

}