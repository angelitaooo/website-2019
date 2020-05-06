import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SectionContainer from '../components/sectionContainer';
import Portfolio from '../components/portfolio';
import Skills from '../components/skills';
import '../styles/page.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <SectionContainer color="#dceffa">
      <section className="skills-container">
        <h1 className="section__title">Skills</h1>
        <div className="skill-wrapper">
          <Skills />
        </div>
      </section>
    </SectionContainer>
    <SectionContainer>
      <h1 className="section__title">About me</h1>
      <p className="about_me">
        I'm a industrial engineer, but now I’m a self-taught software engineer
        with more than 2 years of professional experience as a frontend
        developer. I have worked with HTML5, CSS3, responsive web design,
        Typescript and Javascript(ES6+). Also I have worked with
        frameworks/libraries like Angular 2+, Vue.js, React and Agile
        methodologies.
      </p>
    </SectionContainer>
    <SectionContainer color="#62b9e1">
      <h1 className="section__title">Portfolio</h1>
      <Portfolio />
    </SectionContainer>
  </Layout>
);

export default IndexPage;
