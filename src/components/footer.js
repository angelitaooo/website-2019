import { Link } from 'gatsby';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../styles/footer.scss';

const Footer = () => (
  <footer className="Footer">
    <h1>Stay in touch</h1>
    <div className="social_network">
      <a href="https://github.com/angelitaooo" target="_blank">
        <FaGithub size={100} color="black" />
      </a>
      <a href="https://www.linkedin.com/in/angelaordonezc/" target="_blank">
        <FaLinkedin size={100} color="black" />
      </a>
      <a href="https://twitter.com/angelitaooo" target="_blank">
        <FaTwitter size={100} color="black" />
      </a>
    </div>
    <div>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
);

export default Footer;
