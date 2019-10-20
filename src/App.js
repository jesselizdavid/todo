import React, { Component } from 'react';

// local imports
import './App.css';
import TodoList from './Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello matey</h1>
        <TodoList />
      </div>
    )
  }
}

export default App;
