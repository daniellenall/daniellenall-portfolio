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
        <img src="img/profile.png" className="responsive-img profile-img" alt="Profile" />
        <h2>Danielle Nall</h2>
        <div className="nav-text">
          <p>Hello <span role="img" aria-label="Waving hand">👋</span></p>
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
          <p>I'm a web developer from a small town in North Western England.</p>

          <p>I'd describe my self as a front end focused, full stack developer. Meaning I'm most comfortable with front end technologies such as HTML, CSS, JavaScript, and React. However, I can also happily work on back end code, having experience with Python and Django, as well as node.js</p>
          
          <p>To keep up to date with my work, you can check out <a href="http://codepen.io/daniellenall">CodePen</a> or <a href="http://github.com/daniellenall">GitHub</a>. I also ocassionally post on <a href="http://twitter.com/dncodes">Twitter</a>. I'm trying to constantly learn and develop my skills further</p>

          <p>I'm also available for work, if you have something you'd like to discuss, <a href="mailto:hi@daniellenall.com">let's chat</a></p>
        </section>
        <ProjectGrid>
          <Project
            name="Dashboard"
            img="img/dashboard.png"
            desc="Interface mock up of an interactive personal dashboard"
            live="https://codepen.io/daniellenall/full/JjYmYOw"
          />

          <Project
            name="Discord Clone"
            img="img/discord-clone.png"
            desc="Replicated Discord app's desktop interface. Write up of my process can be seen inside the demo"
            live="https://codepen.io/daniellenall/full/RwWBGgQ"
          />

          <Project
            name="Random Acts of Kindness"
            img="img/kindness.png"
            desc="Generates ideas of kind things people can do for others"
            live="https://codepen.io/daniellenall/full/QWjBjqm"
          />

          <Project
            name="Web Dev Resources"
            img="img/dev-resources.png"
            desc="A curated collection of sites I find useful for web development and design"
            live="https://dev-resources.netlify.com/"
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
            live="https://5d3dff595d946700088a42d1--daniellenall.netlify.com/"
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
            <textarea name="message" rows="6" defaultValue="Your message"></textarea>
            <button type="submit" className="btn" value="Send">Send</button>
          </form>

        </section>

        <Footer />
      </div>
    </div>
  );
}

export default App;
