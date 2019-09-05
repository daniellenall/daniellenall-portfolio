import React from 'react';
import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="wrapper">

      <Navigation>
        <h2>Danielle Nall</h2>
        <p>Hello 👋</p>
        <p>You've reached my portfolio, I'm a web developer from the North West of England.</p>
        <p></p>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </Navigation>
      <div className="main">
        <header className="App-header">
          
        </header>
        <section id="about" className="section">
          <h2>About</h2>
          <p>Consequat et ullamco laboris aliquip exercitation velit irure est qui nostrud labore magna qui sunt.</p>
          <p>Ex sit ullamco proident nisi ut nulla. Laboris mollit duis elit laboris magna consectetur fugiat dolor labore eu. Cillum veniam est nulla eiusmod qui nisi commodo aliquip Lorem consectetur. Nulla enim magna labore nulla laboris consectetur do duis mollit. Pariatur elit ea ipsum ad id id in est laboris. Ut non aute minim eu proident culpa laboris labore do voluptate.</p>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <p>Consequat et ullamco laboris aliquip exercitation velit irure est qui nostrud labore magna qui sunt.</p>
          <p>Ex sit ullamco proident nisi ut nulla. Laboris mollit duis elit laboris magna consectetur fugiat dolor labore eu. Cillum veniam est nulla eiusmod qui nisi commodo aliquip Lorem consectetur. Nulla enim magna labore nulla laboris consectetur do duis mollit. Pariatur elit ea ipsum ad id id in est laboris. Ut non aute minim eu proident culpa laboris labore do voluptate.</p>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Consequat et ullamco laboris aliquip exercitation velit irure est qui nostrud labore magna qui sunt.</p>
          <p>Ex sit ullamco proident nisi ut nulla. Laboris mollit duis elit laboris magna consectetur fugiat dolor labore eu. Cillum veniam est nulla eiusmod qui nisi commodo aliquip Lorem consectetur. Nulla enim magna labore nulla laboris consectetur do duis mollit. Pariatur elit ea ipsum ad id id in est laboris. Ut non aute minim eu proident culpa laboris labore do voluptate.</p>
        </section>
      </div>
    </div>
  );
}

export default App;
