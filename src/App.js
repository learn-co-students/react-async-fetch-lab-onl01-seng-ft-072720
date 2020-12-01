// create your App component here
import React from 'react'

export default class App extends React.Component {
    state = {
        people: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                people: data.people
            })
        })
    }

    renderPeopleToDom = (data) => {
        return data.map(person => {
            return (
                <div>
                    <p>{`${person.name} is in a space aboard the ${person.craft}`}</p>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h1>People in Space:</h1>
                {this.renderPeopleToDom(this.state.people)}
            </div>
        )
    }
}