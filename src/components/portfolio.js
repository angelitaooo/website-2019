// import { Link } from 'gatsby';
import React from 'react';
import '../styles/Portfolio.scss';
import PortfolioItem from './portfolioItem';
import data from '../data';

const Portfolio = () => (
  <section className="portfolio">
    {data.portfolio.map((item, index) => (
      <PortfolioItem
        key={index}
        title={item.title}
        description={item.description}
        image={item.img}
        link={item.link}
      />
    ))}
  </section>
);

export default Portfolio;
