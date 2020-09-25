import React, { Component } from 'react'
import '../styling/RepoLink.scss';

class StarredRepos extends Component {
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
    let id = ''
    if (data.length > 0) {
      name = data[0].name
      id = data[0].owner.id
    }

    return (
      <div className="starredrepos">
        <p>{name}{id}</p> {/* //.map(repo => <p><a href={repo["repo_url"]}>{repo["name"]}</a></p>)} */}
      </div>
     )
   }
 }


 export default StarredRepos
