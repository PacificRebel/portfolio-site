import React, { Component } from 'react'
import '../styling/RepoLink.scss';

class RepoLink extends Component {
  constructor(props) {
    super(props)
      this.state = { userData: {} }
    }

  componentDidMount() {
    fetch("https://api.github.com/users/PacificRebel")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({userData: data})
    })
  }
  render() {
    return (
      <div className="repolink">
      <a href="https://github.com/PacificRebel">GitHub</a>
      {/*<a href={this.state.userData.repos_url}>GitHub</a>*/}
      </div>
    )
  }
}

export default RepoLink
