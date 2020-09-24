import React, { Component } from 'react';
import GitHubCall from './components/GitHubCall';
import RepoLink from './components/RepoLink';
import BlogLink from './components/BlogLink';
import StarredRepos from './components/StarredRepos';
import './App.scss';
import { Column, Row } from 'simple-flexbox';

class App extends Component{
  render(){
    return(
// start of main column (whole page?)
      <Column flexGrow={1}>

// first row starts here
        <Row vertical='center'>

// first column in first row (my name)
        <Column flexGrow={1} horizontal='center'>
          <span><GitHubCall /></span>
        </Column>

// second column in first row (empty space in between)
        <Column flexGrow={1} horizontal='center'>
          <span></span>
        </Column>

// third column in first row (this will be link to bio)
        <Column
                flexGrow={1}
                horizontal='center'
                style={{ fontFamily: 'Special Elite' }}>
          <span>/about</span>
        </Column>
// end of first row
        </Row>

// second row starts here
        <Row vertical='center'>

// first column of second row (link to github repos - not needed)
          <Column flexGrow={1} horizontal='center'>
            <span><RepoLink /></span>
          </Column>

// second column of second row (link to blog)
          <Column flexGrow={1} horizontal='center'>
            <span><BlogLink /></span>
          </Column>

// third column of second row (starred repos - should be just one repo)
          <Column flexGrow={1} horizontal='center'
          style={{ fontFamily: 'Special Elite' }}>
            <span><StarredRepos /></span>
          </Column>
// end of second row
        </Row>
// end of main column (whole page?)
      </Column>
    );
  }
}

export default App;
