import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Santanu', age: 29 },
      { name: 'Sourav', age: 28 },
      { name: 'kajal', age: 27 }
    ]
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

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }
    return (
      <div className="App">
        <p>HI I'm react App</p>
        <p>It's realy working</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Santanu!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'San!')}
          changed={this.nameChangedHandler}>My hobbies : Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
      // React.createElement('div', {className:'App'}, React.createElement('h1', null ,'Hi I\'m React App' ))
    );
  }

}

export default App;
