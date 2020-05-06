import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Skill from '../components/skill';
import '../styles/page.scss';
import SectionContainer from '../components/sectionContainer';
import Portfolio from '../components/portfolio';
import react from '../images/react.png';
import angular from '../images/angular.png';
import vue from '../images/vue.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <SectionContainer color="#dceffa">
      <section className="skills-container">
        <h1 className="section__title">Skills</h1>
        <div className="skill-wrapper">
          <Skill image={react} color="#192437" />
          <Skill image="https://vuejs.org/images/logo.png" color="#baccff" />
          <Skill image={angular} color="#e5adaf" />
          <Skill image={vue} color="#41b2d9" />
          <Skill
            image="https://cdn.freebiesupply.com/logos/large/2x/bootstrap-4-logo-png-transparent.png"
            color="#e7b2e7"
          />
          <Skill
            image="https://potlaservices.com/wp-content/uploads/2018/09/600px-HTML5_Badge.svg_.png"
            color="#ffd175"
          />
          <Skill
            image="https://git-scm.com/images/logos/downloads/Git-Icon-Black.png"
            color="#7ba4c4"
          />
          <Skill
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2000px-Sass_Logo_Color.svg.png"
            color="#692369"
          />

          <Skill
            image="https://seeklogo.com/images/G/gatsby-logo-1A245AD37F-seeklogo.com.png"
            color="#dccae5"
          />
        </div>
      </section>
    </SectionContainer>
    <SectionContainer>
      <h1 className="section__title">About me</h1>
      <p className="about_me">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </SectionContainer>
    <SectionContainer color="#62b9e1">
      <h1 className="section__title">Portfolio</h1>
      <Portfolio />
    </SectionContainer>
  </Layout>
);

export default IndexPage;
