import React, { Component } from 'react';
import './Projects.css';
class ProjectGrid extends Component {
    render() {
        return(
            <section id="projects" className="grid">
                <div className="section-header">
                    <h2>Projects</h2>
                    <p>Click the images to view live versions of each project</p>
                </div>
                {this.props.children}
            </section>
        );
    }
}

export default ProjectGrid;