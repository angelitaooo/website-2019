import { Link } from 'gatsby';
import React from 'react';
import '../styles/header.scss';
import { Link as ScrollLink } from 'react-scroll';

const Header = ({ menuLinks, path }) => {
  return (
    <header className="nav">
      <div>
        <nav>
          <ul style={{ display: 'flex', flex: 1 }}>
            {menuLinks.map(link => (
              <li key={link.name} className="menu_link">
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
            {path === '/' && (
              <>
                <li className="menu_link">
                  <ScrollLink
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Skills
                  </ScrollLink>
                </li>
                <li className="menu_link">
                  <ScrollLink
                    to="aboutMe"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    About Me
                  </ScrollLink>
                </li>
                <li className="menu_link">
                  <ScrollLink
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Portfolio
                  </ScrollLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
