import React, { Component } from 'react';
import RepoLink from './components/RepoLink';
import BlogLink from './components/BlogLink';
import ProjectOne from './components/ProjectOne';
import ProjectTwo from './components/ProjectTwo';
import ProjectThree from './components/ProjectThree';
import './App.scss';
import { Column, Row } from 'simple-flexbox';

class App extends Component{
  render(){
    return(
      <Column>
      <div class="container">

                  <section class="cards">

                      <article class="card">
                         <h2>Heli Sivunen</h2>
                      </article>

                      <article class="card">
                      <div class="text">
                         <p>Front End Developer</p>
                         </div>
                      </article>

                      <article class="card">
                      <div class="text">
                        <p>/about</p>
                        {/*put link to README from github front page*/}
                        </div>
                      </article>

                      <article class="card">
                      <div class="text">
                        <p><RepoLink /></p>
                        </div>
                      </article>

                      <article class="card">
                      <div class="text">
                        <p><BlogLink /></p>
                        </div>
                      </article>

                      <article class="card">
                      <div class="text">
                        <p><ProjectTwo /></p>
                        </div>
                      </article>

                      <article class="card">
                      <div class="text">
                        <p><ProjectOne /></p>
                        </div>
                      </article>

                      <article class="card">
                      <div class="text">
                        <p><ProjectThree /></p>
                        </div>
                      </article>

                      <article class="card">
                      <div class="text">
                         <p>   </p>
                         </div>
                      </article>

                      <article class="card">
                      <div class="text">
                         <p>   </p>
                         </div>
                      </article>
                  </section>
      </div>
      </Column>

    );
  }
}

export default App;
