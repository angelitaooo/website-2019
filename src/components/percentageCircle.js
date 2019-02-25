import { Link } from "gatsby"
import React from "react"
import "../styles/PercentageCircle.scss"

const PercentageCircle = ({
    skill,
    percentage
}) => (
  <div className="circle-wrap">
    <div className="circle">
      <div className="mask full">
        <div className="fill" />
      </div>
      <div className="mask half">
        <div className="fill" />
      </div>
      <div className="inside-circle">{skill} {percentage}%</div>
    </div>
  </div>
)

export default PercentageCircle
