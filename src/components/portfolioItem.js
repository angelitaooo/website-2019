import { Link } from 'gatsby';
import React from 'react';
import '../styles/PortfolioItem.scss';

const PortfolioItem = ({ image, title, description }) => (
  <article className="portfolio__item">
    <img src="https://placekitten.com/600/360" />
    <header>
      <h2>{title}</h2>
      <p>{description}</p>
    </header>
  </article>
);

export default PortfolioItem;
