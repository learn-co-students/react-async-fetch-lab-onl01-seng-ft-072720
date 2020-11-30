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

    renderPeopleToDOM = (data) => {
        return data.map(person => {
            return (
                <div>
                    <p>{`${person.name} is in space aboard the ${person.craft}`}</p>
                </div>
            )
        })
    }

    render() {
        return (

            <div>
                <h1>PEOPLE IN SPACE:</h1>
                {this.renderPeopleToDOM(this.state.people)}
            </div>
        )
    }
} 