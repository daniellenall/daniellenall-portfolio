import React, { Component } from 'react';
import './Projects.css';
class Project extends Component {
    render() {
        return(
            <div className="project">
                    <a href={this.props.live}><img src={this.props.img} alt="Screenshot of project" className="project-img"/></a>
                    <div className="project-content">
                        <h3 className="title">{this.props.name}</h3>
                        <p className="project-desc">{this.props.desc}</p>
                    </div>
            </div>
        );
    }
}

export default Project;