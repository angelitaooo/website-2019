import { Link } from 'gatsby';
import React from 'react';
import '../styles/PortfolioItem.scss';
import { withPrefix } from 'gatsby';

const PortfolioItem = ({ image, title, description, link }) => (
  <article className="portfolio__item">
    <img src={withPrefix(`images/${image}`)} />
    <header>
      <h1>
        <a href={link} target="_blank">
          {title}
        </a>
      </h1>
      <p>{description}</p>
    </header>
  </article>
);

export default PortfolioItem;
