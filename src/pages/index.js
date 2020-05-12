import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SectionContainer from '../components/sectionContainer';
import Portfolio from '../components/portfolio';
import Skills from '../components/skills';
import '../styles/page.scss';

const IndexPage = ({ path }) => (
  <Layout path={path}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className="header">
      <div className="header-container">
        <h1 className="name">Hi people, my name is Angela</h1>
        <p className="title">I'm a Web Developer</p>
        <p className="subtitle">Welcome to my new website.</p>
      </div>

      <svg
        className="Header__svg"
        width="100%"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path id="pink" d="M0 100 C 20 -100 50 100 100 100 Z" />
        <path id="lightblue" d="M0 100 C 20 0 50 100 70 100 Z" />
        <path id="hotpink" d="M0 100 C 30 150 40 -70 100 100 Z" />
        <path id="blue" d="M0 100 C 80 110 70 -100 100 100 Z" />
      </svg>
    </section>
    <SectionContainer color="#dceffa">
      <section name="skills" className="skills-container">
        <h1 className="section__title">Skills</h1>
        <div className="skill-wrapper">
          <Skills />
        </div>
      </section>
    </SectionContainer>
    <SectionContainer>
      <h1 name="aboutMe" className="section__title">
        About me
      </h1>
      <p className="about_me">
        I'm a industrial engineer, but now I’m a self-taught software engineer
        with more than 2 years of professional experience as a frontend
        developer. I have worked with HTML5, CSS3, responsive web design,
        Typescript and Javascript(ES6+). Also I have worked with
        frameworks/libraries like Angular 2+, Vue.js, React and Agile
        methodologies.
      </p>
    </SectionContainer>
    <SectionContainer name="portfolio" color="#62b9e1">
      <h1 className="section__title">Portfolio</h1>
      <Portfolio />
    </SectionContainer>
  </Layout>
);

export default IndexPage;
