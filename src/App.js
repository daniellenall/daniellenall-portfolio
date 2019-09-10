import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/layout/Footer';

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
        {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#810073" fill-opacity="1" d="M0,64L60,96C120,128,240,192,360,208C480,224,600,192,720,154.7C840,117,960,75,1080,69.3C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
  </svg>*/}

        <section id="about" className="section">
          <h2>About</h2>
          <p>Interested in computers from a young age, I have been inseparable from my laptop</p>
          <p>I like building the pretty parts of the internet, also known as being a front end developer.</p>
          <p>You can keep up with me on <a href="http://codepen.io/daniellenall">CodePen</a>, <a href="http://github.com/daniellenall">GitHub</a>, or <a href="http://twitter.com/dncodes">Twitter</a></p>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project grid">
            <div className="project">
              <h3>Dev Resources</h3>
              <p>My curation of sites I find useful when developing sites</p>
            </div>
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
            <button type="submit" className="btn" value="Send">Send</button>
          </form>

        </section>

        <Footer/>
      </div>
    </div>
  );
}

export default App;
