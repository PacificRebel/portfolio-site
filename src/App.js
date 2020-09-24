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
      <Column flexGrow={1}>

        <Row horizontal='space-between'>
        <Column flexGrow={1} horizontal='left'>
          <span> <GitHubCall />  </span>
        </Column>
        <Column flexGrow={1} horizontal='left'>
          <span>    </span>
        </Column>
        <Column
                flexGrow={1}
                horizontal='left'
                style={{ fontFamily: 'Special Elite' }}>
          <span> /about  </span>
        </Column>
        </Row>

        <Row vertical='center'>

          <Column flexGrow={1} horizontal='center'>
            <span> <RepoLink />  </span>
          </Column>

          <Column flexGrow={1} horizontal='center'>
            <span> <BlogLink /> </span>
          </Column>

          <Column flexGrow={1} horizontal='center' 
          style={{ fontFamily: 'Special Elite' }}>
            <span> <StarredRepos /> </span>
          </Column>

        </Row>

      </Column>
    );
  }
}

export default App;
