import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import './Navigation.css';
class Navigation extends Component {
    render() {
        return (
            <div className="nav">
                <img src="img/profile.png" className="responsive-img profile-img" alt="Profile" />
                <h2>Danielle Nall</h2>
                <p>Hello <span role="img" aria-label="Waving hand">👋</span></p>
                <ul className='nav-links'>
                    <li className="nav-text">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/projects">
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">
                            Contact
                        </NavLink>
                    </li>

                </ul>
            </div>
        );
    }
}

export default Navigation;