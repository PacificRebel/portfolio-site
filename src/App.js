import React, { Component } from 'react';
import GitHubCall from './GitHubCall';
import RepoLink from './RepoLink';
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <GitHubCall />
        <RepoLink />
      </div>
    );
  }
}

export default App;
