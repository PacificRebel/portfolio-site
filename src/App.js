import React, { Component } from 'react';
import GitHubCall from './GitHubCall';
import RepoLink from './RepoLink';
import './App.css';
import { Column, Row } from 'simple-flexbox';

class App extends Component{
  render(){
    return(
      <Column flexGrow={1}>
        <Row horizontal='center'>
          <h1><GitHubCall /></h1>
        </Row>
        <Row vertical='center'>
          <Column flexGrow={1} horizontal='center'>
            <h3> Contact </h3>
            <span>  </span>
          </Column>
          <Column flexGrow={1} horizontal='center'>
            <span> <RepoLink /></span>
          </Column>
        </Row>
      </Column>
    );
  }
}

export default App;
