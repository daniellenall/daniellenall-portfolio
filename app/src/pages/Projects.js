import React from "react";
import ProjectGrid from '../components/projects/ProjectGrid';
import Project from '../components/projects/Project';

function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <p>Click the images to view live versions of each project</p>

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
        </section>
    );
}

export default Projects;