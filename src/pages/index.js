import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PercentageCircle from "../components/percentageCircle"
import "../styles/page.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="skills-container">
      <PercentageCircle skill="React" percentage="60" />
      <PercentageCircle skill="Vue" percentage="40" />
      <PercentageCircle skill="Angular" percentage="50" />
      <PercentageCircle skill="Css" percentage="50" />
    </div>
    <section className="main-container">

    </section>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
