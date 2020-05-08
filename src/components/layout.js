import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import '../styles/layout.css';

const Layout = ({ path, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
          path={path}
        />

        <main style={{ position: `relative` }}>{children}</main>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
