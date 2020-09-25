import React, { Component } from 'react'
import '../styling/ProjectThree.scss';

class ProjectThreeDetails extends Component {
  constructor(props) {
    super(props)
      this.state = { starredUserData: [] }
    };

  componentDidMount() {
    fetch("https://api.github.com/users/PacificRebel/starred")
    .then(response => response.json())
    .then(data => {
      this.setState({starredUserData: data})
    })
  }

  render() {
    const data = this.state.starredUserData
    console.log(data)
    let name = ''
    let description = ''
    let homepage = ''
    if (data.length > 0) {
      name = data[1].name
      description = data[1].description
    }

    return (
      <div className="projectthreedetails">
      <span>
      {name}{description}{homepage}
      </span>
      </div>
     )
   }
 }

 export default ProjectThreeDetails
