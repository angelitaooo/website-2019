import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Skill from '../components/skill';
import '../styles/page.scss';
import SectionContainer from '../components/sectionContainer';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <SectionContainer color="#a7e9f7">
      <section className="skills-container">
        <h1 className="skills__title">SKILLS</h1>
        <div className="skill-wrapper">
          <Skill
            image="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            color="#192437"
          />
          <Skill image="https://vuejs.org/images/logo.png" color="#baccff" />
          <Skill
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"
            color="#e5adaf"
          />
          <Skill
            image="https://www.grupohernandezalba.com/wp-content/uploads/2018/05/a32f83aa2c675058e4a05a0fd4da05eb.png"
            color="#41b2d9"
          />
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
    <SectionContainer color="teal">
      <section className="portfolio">
        <div className="portfolio__grid portfolio__grid--left">
          {Array.from({ length: 5 }).map((item, index) => (
            <article key={index} className="portfolio__item">
              <img src="https://placekitten.com/600/360" />
              <header>
                <h2>Project #1</h2>
                <p>bla bla bla bla</p>
              </header>
            </article>
          ))}
        </div>
        <div className="portfolio__grid portfolio__grid--right">
          {Array.from({ length: 5 }).map((item, index) => (
            <article key={index} className="portfolio__item">
              <img src="https://placekitten.com/600/360" />
              <header>
                <h2>Project #2</h2>
                <p>bla bla bla bla</p>
              </header>
            </article>
          ))}
        </div>
      </section>
    </SectionContainer>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
