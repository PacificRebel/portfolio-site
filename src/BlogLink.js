import React, { Component } from 'react'

class BlogLink extends Component {
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
      <div className="bloglink">
      <p>
      <a href={this.state.userData.blog}>Blogs</a>
      </p>
      </div>
    )
  }
}

export default BlogLink
