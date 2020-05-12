import React from 'react';
import { Link } from 'gatsby';
import { withPrefix } from 'gatsby';
import '../styles/skill.scss';

const Skill = ({ image, color }) => (
  <section>
    <div className="skill-container" style={{ backgroundColor: color }}>
      <img src={withPrefix(`images/${image}`)} />
    </div>
  </section>
);

export default Skill;
