import React, { Component } from 'react';
import './Projects.css';
class Project extends Component {
    render() {
        return(
            <div className="project">
                    <img src={this.props.img} alt="Screenshot of project" className="project-img"/>
                    <div className="project-content">
                        <h3 className="title">{this.props.name}</h3>
                        <p className="project-desc">{this.props.desc}</p>
                    </div>
            </div>
        );
    }
}

export default Project;