import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <p>HI I'm react App</p>
      <p>It's realy working</p>
      <Person name="Santanu Hazra" age={30} />
      <Person name="Sourav Roy" age={28}>My hobbies : Racing</Person>
      <Person name="Kajal Mandal" age={28} />
    </div>
    // React.createElement('div', {className:'App'}, React.createElement('h1', null ,'Hi I\'m React App' ))
  );
}

export default App;
