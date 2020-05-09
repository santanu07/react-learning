import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
/* 
1.Create an input field (in App conponent) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).
2.Create a new component (=> ValidationComponent) which receives the text length as a prop
3.Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)
4.Create another compontent (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
5.Render a list of CharComponents where CharComponent receives a different letter of the entered text (in the initial input field) as a prop.
6.When you click a CharComponent, it shoud be removed from the enteret text.

Hint: Keep in mind that JavaScript strings are basically arrays
*/


class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({ userInput: event.target.value })
  }

  deleteCharHandler = (index) => {
    console.log('delete handle' + index);
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText=text.join('');
    this.setState({userInput:updatedText});

  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <CharComponent key={index} char={ch} clicked={this.deleteCharHandler.bind(this, index)} />

    })
    return (
      <div>
        <input type="text" onChange={this.inputChangedHandler.bind(this)} value={this.state.userInput} />
        <p>User input character length is {this.state.userInput.length}</p>
        <ValidationComponent userInpuLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }

}

export default App;
