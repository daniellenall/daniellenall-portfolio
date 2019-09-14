import React from 'react';
import './App.css';
import Navigation from './components/layout/Navigation';
import ProjectGrid from './components/projects/ProjectGrid';
import Project from './components/projects/Project';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="wrapper">

      <Navigation>
        <img src="img/profile.png" class="responsive-img profile-img" alt="Profile Picture"/>
        <h2>Danielle Nall</h2>
        <div className="nav-text">
          <p>Hello 👋</p>
          <p>You've reached my portfolio, I'm a web developer from the North West of England.</p>
          <ul>
          <a href="#about"><li>About</li></a>
          <a href="#projects"><li>Projects</li></a>
          <a href="#contact"><li>Contact</li></a>
        </ul>
        </div>
      </Navigation>
      <div className="main">
        <header className="App-header">

        </header>
        {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#810073" fill-opacity="1" d="M0,64L60,96C120,128,240,192,360,208C480,224,600,192,720,154.7C840,117,960,75,1080,69.3C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
  </svg>*/}

        <section id="about" className="section">
          <h2>About</h2>
          <p>I'm a web developer based in the North of England. I primarily focus on front end dev, but I'm fairly comfortable with back end technologies too. </p>
          <p>Languages and frameworks I've worked with before include: HTML, CSS, Sass, JavaScript, React (this site was made with React), Python, node.js, PHP.</p>
          <p>You can keep up with me on <a href="http://codepen.io/daniellenall">CodePen</a>, <a href="http://github.com/daniellenall">GitHub</a>, or <a href="http://twitter.com/dncodes">Twitter</a></p>
        </section>
        <ProjectGrid>
          <Project
            name="Web Dev Resources"
            img="img/dev-resources.png"
            desc="A curated collection of sites I find useful for web development and design"
            live="https://dev-resources.netlify.com/"
          />

          <Project
            name="Simple Docs"
            img="img/simple-docs.png"
            desc="Design template for documentation built for personal projects."
            live="https://simple-docs.netlify.com/"
          />

          <Project
            name="Daydream Digital"
            img="img/daydream.png"
            desc="Landing page for a digital crafting file brand. Simple static site with links to an Etsy store"
            live="https://daydreamdigital.netlify.com/"
          />
          <Project
            name="Previous Portfolio"
            img="img/old-portfolio.png"
            desc="My last portfolio before this one was written with plain HTML and Sass"
            live="https://daniellenall.com"
          />
          <Project
            name="Digital Clock"
            img="img/digi-clock.png"
            desc="Simple digital clock page written with vanilla JS."
            live="https://digital-clock-dn.netlify.com/"
          />

          <Project
            name="On This Platform"
            img="img/otp.png"
            desc="Petitioning site based around software ports. Front end built with Bootstrap and custom CSS"
          />
        </ProjectGrid>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <form action="https://formspree.io/hi@daniellenall.com" method="POST">
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="_replyto" placeholder="Email" />
            <input type="text" className="long-text-form" name="message" placeholder="Your message" />
            <button type="submit" className="btn" value="Send">Send</button>
          </form>

        </section>

        <Footer />
      </div>
    </div>
  );
}

export default App;
