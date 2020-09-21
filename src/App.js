import React, { Component } from 'react';
import GitHubCall from './GitHubCall';
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <GitHubCall />
      </div>
    );
  }
}

export default App;
