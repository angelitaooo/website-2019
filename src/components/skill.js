import { Link } from "gatsby"
import React from "react"
import "../styles/skill.scss";

const Skill = ({
    image,
    color
}) => (
  <section>
    <div className="skill-container" style={{backgroundColor: color}}>
      <img src={image}></img>
    </div>
  </section>
)

export default Skill