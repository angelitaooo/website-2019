import { Link } from 'gatsby';
import React from 'react';
import '../styles/sectionContainer.scss';

const SectionContainer = ({ children, color }) => (
  <div style={{ backgroundColor: color }}>
    <section className="SectionContainer">{children}</section>
  </div>
);

export default SectionContainer;
