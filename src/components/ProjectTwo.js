import React, { Component } from 'react'
import '../styling/ProjectTwo.scss';

class ProjectTwo extends Component {
  constructor(props) {
    super(props)
      this.state = { starredUserData: [],
                     isHovering: false
                    };
      this.handleMouseHover = this.handleMouseHover.bind(this);
    };

    handleMouseHover() {
      this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
      return {
      isHovering: !state.isHovering,
      };
    }

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
    if (data.length > 0) {
      name = data[3].name
      description = data[3].description
    }

    return (
      <div className="projecttwo">
      <div
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <span>
        <a href={name}>{name}</a>
        </span>
      </div>
      {this.state.isHovering && <div>{description}</div>}
      </div>
     )
   }
 }


 export default ProjectTwo
