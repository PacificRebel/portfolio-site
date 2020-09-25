import React, { Component } from 'react'
import '../styling/RepoLink.scss';

class ProjectOne extends Component {
  constructor(props) {
    super(props)
      this.state = { starredUserData: [] }
    }

  componentDidMount() {
    // this._isMounted = true;
    fetch("https://api.github.com/users/PacificRebel/starred")
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      this.setState({starredUserData: data})
    })
  }

  // componentWillUnmount() {
  //   this._isMounted = false;
  // }


  render() {
    const data = this.state.starredUserData
    console.log(data)
    let name = ''
    // let id = ''
    // let description = ''
    if (data.length > 0) {
      name = data[0].name
      // id = data[0].owner.id
      // description = data[0].description
    }

    return (
      <div className="projectone">
        <p>
        <a href={name}>{name}</a>
        </p> {/* //.map(repo => <p><a href={repo["repo_url"]}>{repo["name"]}</a></p>)} */}
      </div>
     )
   }
 }


 export default ProjectOne
