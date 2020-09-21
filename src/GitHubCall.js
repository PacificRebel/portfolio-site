import React, { Component } from 'react'

class GitHubCall extends Component {
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
      <div className="githubcall">
      {this.state.userData["name"]}
      </div>
    )
  }
}

export default GitHubCall
