import React, {Component} from 'react'

class App extends Component {

    state = {
        peopleInSpace: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(people => {
            this.setState({
                peopleInSpace: people.people
            })
        })

    }

    render() {
        return (
            <div>
            {this.state.peopleInSpace.map((person) => <h1>{person.name}</h1>)}
            </div>
        )
    }
}

export default App
