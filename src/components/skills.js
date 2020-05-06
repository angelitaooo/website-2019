// import { Link } from 'gatsby';
import React from 'react';
import '../styles/Portfolio.scss';
import Skill from './skill';
import data from '../data';

const Skills = () =>
  data.skills.map((skill, index) => {
    return <Skill key={index} image={skill.img} color={skill.color} />;
  });

export default Skills;
