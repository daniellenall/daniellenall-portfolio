import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
          currentYear: new Date().getFullYear()
        }
    }

    render() {
        return (
            <footer className="footer">
                <p>&copy; Danielle Nall  { this.state.currentYear } <a href="https://github.com/daniellenall/daniellenall">GitHub</a></p>
            </footer>
        );
    }
}

export default Footer;