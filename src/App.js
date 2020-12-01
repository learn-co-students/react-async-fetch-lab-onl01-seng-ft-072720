// create your App component here
import React, { Component } from 'react'

class App extends Component {

    state = {
        nauts: []
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                nauts: data.people
            })
        })
    }

    render(){
        return <div>
            {this.state.nauts.map(naut => <p>{naut.name}</p>)}
        </div>
    }
    

}

export default App