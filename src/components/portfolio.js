import { Link } from 'gatsby';
import React from 'react';
import '../styles/Portfolio.scss';
import PortfolioItem from './portfolioItem';

const Portfolio = () => (
  <section className="portfolio">
    <div className="portfolio__grid portfolio__grid--left">
      <PortfolioItem title="hola" description="mundo" />
      <PortfolioItem title="hola" description="mundo" />
      <PortfolioItem title="hola" description="mundo" />
    </div>
    <div className="portfolio__grid portfolio__grid--right">
      <PortfolioItem title="hola" description="mundo" />
      <PortfolioItem title="hola" description="mundo" />
      <PortfolioItem title="hola" description="mundo" />
    </div>
  </section>
);

export default Portfolio;
