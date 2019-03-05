import { Link } from "gatsby"
import React from "react"
import "../styles/header.scss"

const Header = () => (
  <header className="Header">
    <div className="header-container">
      <h1 className="name">Hi people, my name is Angela</h1>
      <p className="title">I'm a Web Developer</p>
      <p className="subtitle">Welcome to my new website.</p>
    </div>

    <svg
      className="Header__svg"
      width="100%"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path id="pink" d="M0 100 C 20 -100 50 100 100 100 Z" />
      <path id="lightblue" d="M0 100 C 20 0 50 100 70 100 Z" />
      <path id="hotpink" d="M0 100 C 30 150 40 -70 100 100 Z" />
      <path id="blue" d="M0 100 C 80 110 70 -100 100 100 Z" />
    </svg>
  </header>
)

export default Header
