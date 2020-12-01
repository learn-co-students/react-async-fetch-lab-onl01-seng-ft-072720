import React, { Component } from 'react'

class APP extends Component {
    state = { 
        inSpace: []
    }

    render() {
        return "hello"
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                inSpace: data.people
            })
        })
    }

}

export default APP 