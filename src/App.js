import React, { Component } from 'react';
import GitHubCall from './components/GitHubCall';
import RepoLink from './components/RepoLink';
import BlogLink from './components/BlogLink';
import ProjectOne from './components/ProjectOne';
import ProjectTwo from './components/ProjectTwo';
import ProjectThree from './components/ProjectThree';
import ProjectThreeDetails from './components/ProjectThreeDetails'
import './App.scss';
import { Column, Row } from 'simple-flexbox';

class App extends Component{
  render(){
    return(
      <Column>
      <div class="container">

                  <section class="cards">

                      <article class="card">
                      <div class="text">
                         <h3><GitHubCall /></h3>
                         <h5>Job title here</h5>
                         </div>
                      </article>

                      <article class="card">
                         <p>   </p>
                      </article>

                      <article class="card">
                        <p>/about</p>
                      </article>

                      <article class="card">
                        <p><RepoLink /></p>
                      </article>

                      <article class="card">
                        <p><ProjectTwo /></p>
                      </article>

                      <article class="card">
                        <p><ProjectOne /></p>
                      </article>

                      <article class="card">
                        <p><ProjectThree /></p>
                      </article>

                      <article class="card">
                         <p>   </p>
                      </article>

                      <article class="card">
                         <p>   </p>
                      </article>
                  </section>
      </div>
      </Column>

    );
  }
}

export default App;
