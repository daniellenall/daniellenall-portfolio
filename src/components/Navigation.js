import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return(
            <div className="nav">
                <ul className="nav-links">
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

export default Navigation;