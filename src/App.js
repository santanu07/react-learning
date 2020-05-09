import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Santanu', age: 29, id: 'sfsfsf' },
      { name: 'Sourav', age: 28, id: 'sfsfsfsf' },
      { name: 'kajal', age: 27, id: 'sffsfsf' }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (personId, event) => {

    const personIndex = this.state.persons.findIndex(p => p.id == personId);
    console.log(personIndex);
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    // or es6 features
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })

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
              click={this.deletePersonHandler.bind(this, index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={this.nameChangedHandler.bind(this, person.id)} />
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
