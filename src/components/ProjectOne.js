import React, { Component } from 'react'
import '../styling/ProjectOne.scss';

class ProjectOne extends Component {
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
    // this._isMounted = true;
    fetch("https://api.github.com/users/PacificRebel/starred")
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      this.setState({starredUserData: data})
    })
  }

  render() {
    const data = this.state.starredUserData
    console.log(data)
    let name = ''
    let description = ''
    if (data.length > 0) {
      name = data[0].name
      description = data[0].description
    }

    return (
      <div className="projectone">
      <div
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <span>
        <a href={name}>{name}</a>
        </span>
              {this.state.isHovering && <div>{description}</div>}
      </div>

      </div>
     )
   }
 }


 export default ProjectOne
