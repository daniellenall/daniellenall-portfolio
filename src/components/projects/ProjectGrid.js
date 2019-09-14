import React, { Component } from 'react';
import './Projects.css';
class ProjectGrid extends Component {
    render() {
        return(
            <section className="grid">
                <h2 className="section-header">Projects</h2>
                {this.props.children}
            </section>
        );
    }
}

export default ProjectGrid;