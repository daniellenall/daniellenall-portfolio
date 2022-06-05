import React, { Component } from 'react';
import './Projects.css';
class ProjectGrid extends Component {
    render() {
        return(
            <div id="projects" className="grid">
                {this.props.children}
            </div>
        );
    }
}

export default ProjectGrid;