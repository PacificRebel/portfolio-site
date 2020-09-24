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
      <Column>
      <div class="container">

                  <section class="cards">

                      <article class="card">
                         <p><GitHubCall /></p>
                      </article>

                      <article class="card">
                         <p>   </p>
                      </article>

                      <article class="card">
                        <p>/about</p>
                      </article>

                      <article class="card">
                         <p>Front End Developer</p>
                      </article>

                      <article class="card">
                         <p>   </p>
                      </article>

                      <article class="card">
                         <p>   </p>
                      </article>

                      <article class="card">
                        <p><RepoLink /></p>
                      </article>

                      <article class="card">
                        <p><BlogLink /></p>
                      </article>

                      <article class="card">
                        <p><StarredRepos /></p>
                      </article>
                  </section>
      </div>
      </Column>

    );
  }
}

export default App;
