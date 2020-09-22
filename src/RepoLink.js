import React, { Component } from 'react'
import './RepoLink.css';

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
      <p>
      <a href={this.state.userData.repos_url}>GitHub repos</a>
      </p>
      </div>
    )
  }
}

export default RepoLink
