import React from 'react';
import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="wrapper">

      <Navigation>
        <img src="img/profile.png" class="responsive-img" />
        <h2>Danielle Nall</h2>
        <p>Hello 👋</p>
        <p>You've reached my portfolio, I'm a web developer from the North West of England.</p>
        <p></p>
        <ul>
          <a href="#about"><li>About</li></a>
          <a href="#projects"><li>Projects</li></a>
          <a href="#contact"><li>Contact</li></a>
        </ul>

      </Navigation>
      <div className="main">
        <header className="App-header">

        </header>
        <section id="about" className="section">
          <h2>About</h2>
          <p>Interested in computers from a young age, I have been inseparable from my laptop</p>
          <p>I like building the pretty parts of the internet, also known as being a front end developer.</p>
          <p>Ex sit ullamco proident nisi ut nulla. Laboris mollit duis elit laboris magna consectetur fugiat dolor labore eu. Cillum veniam est nulla eiusmod qui nisi commodo aliquip Lorem consectetur. Nulla enim magna labore nulla laboris consectetur do duis mollit. Pariatur elit ea ipsum ad id id in est laboris. Ut non aute minim eu proident culpa laboris labore do voluptate.</p>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project grid">
            <div className="project">
              <h3>100 Days of UI</h3>
              <p>Currently following </p>
            </div>
            <div className="project">
              <h3>Digital Clock</h3>
              <p>Simple digital clock dashboard written with vanilla JavaScript</p>
            </div>
            <div className="project">
              <h3>Why The Wirral?</h3>
              <p>Tourism page for the Wirral Peninsula. Self driven project. Built without frameworks, just pure HTML & CSS</p>
            </div>
            <div className="project">
              <h3>On This Platform</h3>
              <p>Petitioning platform</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <form action="https://formspree.io/hi@daniellenall.com" method="POST">
            <input type="text" name="name" />
            <input type="email" name="_replyto" />
            <input type="submit" value="Send" />
          </form>

        </section>

        <footer className="footer">
            <p>Portfolio built by me using React, you can view the source on <a href="https://github.com/daniellenall/daniellenall">GitHub</a></p>
        </footer>
      </div>
    </div>
  );
}

export default App;
