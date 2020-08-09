import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Section from '../components/section'



export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Danielle Nall - Front End Developer</title>
      </Head>
      <Hero>
        <h1>Danielle Nall</h1>
        <h2>Front End Developer</h2>
        <p>Passionate about coding interesting user experiences</p>
        <p>More?</p>
      </Hero>

      <Section title="About">

        <div className="text-left">
          <p>Hi, I’m a Merseyside based software engineer with a focus on front end development. </p>

          <p>I graduated with a HND in Computer Science in 2016. Since then I have spent some time caring for a family member whilst freelancing occasionally and working on personal projects</p>

          <p>I also have some commercial experience developing with React.</p>

          <h3>Tools</h3>


          <ul className="two-column">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Python</li>
            <li>Git</li>
            <li>VSCode</li>
            <li>OSX</li>
            <li>Linux</li>
          </ul>

          <Link href="/about">
            <a>Learn More?</a>
          </Link>
        </div>
        <div className="profile-img-container">
          <img className="profile-img" src="profile.jpeg" alt="girl smiling" width="250px" />
          <div className="circle"></div>
        </div>

      </Section>


      <Section title="Projects">
        <div className="project-card">
          <div className="project-desc">
            <h3 className="project-title"></h3>
          </div>
        </div>

      </Section>


      <Section title="Writing">

      </Section>


      <Section title="Contact">

      </Section>

    </Layout>
  )
}
