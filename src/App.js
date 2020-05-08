import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Santanu', age: 29 },
      { name: 'Sourav', age: 28 },
      { name: 'kajal', age: 27 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = () => {
    // console.log('was clicked'); 
    this.setState({
      persons: [
        { name: 'Santanu', age: 29 },
        { name: 'Sourav', age: 28 },
        { name: 'kajal', age: 26 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Santanu', age: 29 },
        { name: event.target.value, age: 28 },
        { name: 'kajal', age: 26 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age} />
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <p>HI I'm react App</p>
        <p>It's realy working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
      // React.createElement('div', {className:'App'}, React.createElement('h1', null ,'Hi I\'m React App' ))
    );
  }

}

export default App;
