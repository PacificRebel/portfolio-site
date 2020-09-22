import React, { Component } from 'react';
import GitHubCall from './GitHubCall';
import RepoLink from './RepoLink';
import BlogLink from './BlogLink';
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
            <span> <RepoLink />  </span>
          </Column>
          <Column flexGrow={1} horizontal='center'>
            <span> <BlogLink /> </span>
          </Column>
        </Row>
      </Column>
    );
  }
}

export default App;
