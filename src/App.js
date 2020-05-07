import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {

// function component not marge state object so we can use multiple state to solve this problem.

  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Santanu', age: 29 },
      { name: 'Sourav', age: 28 },
      { name: 'kajal', age: 27 }
    ]
  });
  // create multiple state.

  const [otherState, setOtherState] = useState('some other state');

  console.log(personState, otherState);

  const switchNameHandler = () => {
    // console.log('was clicked'); 
    setPersonState({
      persons: [
        { name: 'Santanu Hazra', age: 29 },
        { name: 'Sourav', age: 28 },
        { name: 'kajal', age: 26 }
      ]
    })
  }
  
  return (
    <div className="App">
      <p>HI I'm react App</p>
      <p>It's realy working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>My hobbies : Racing</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />
    </div>
    // React.createElement('div', {className:'App'}, React.createElement('h1', null ,'Hi I\'m React App' ))
  );

}

export default App;