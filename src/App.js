import React, { Component } from 'react'

class App extends Component {

    state = {
        peopleInSpace: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => this.setState({peopleInSpace: data}))
    }

    render() {
        return (
            <div>{this.peopleInSpace}</div>
        )
    }
    
}

export default App