import React from 'react'
import { NavLink } from "react-router-dom";
import "./notFoundPage.css"
import icon from "~/assets/vendor/logoElearning.png";

export default function NotFoundPage() {
  return (
    <div className="notFound">
    {/* about */}
    <div className="about">
      <a className="bg_links social portfolio" href="!#" target="_blank" rel="noreferrer">
        <span className="icon" />
      </a>
      <a className="bg_links social dribbble" href="!#" target="_blank" rel="noreferrer">
        <span className="icon" />
      </a>
      <a className="bg_links social linkedin" href="!#" target="_blank" rel="noreferrer">
        <span className="icon" />
      </a>
      {/* <a className="bg_links logo" href="!#" /> */}
    </div>
    {/* end about */}
    <nav>
      <div className="menu">
        <img src={icon} className="logoElearning" alt="" />
        <p className="website_name">E-learning</p>
      </div>
    </nav>
    <section className="wrapper">
      <div className="container">
        <div id="scene" className="scene" data-hover-only="false">
          <div className="circle" data-depth="1.2" />
          <div className="one" data-depth="0.9">
            <div className="content">
              <span className="piece" />
              <span className="piece" />
              <span className="piece" />
            </div>
          </div>
          <div className="two" data-depth="0.60">
            <div className="content">
              <span className="piece" />
              <span className="piece" />
              <span className="piece" />
            </div>
          </div>
          <div className="three" data-depth="0.40">
            <div className="content">
              <span className="piece" />
              <span className="piece" />
              <span className="piece" />
            </div>
          </div>
          <p className="p404" data-depth="0.50">404</p>
          <p className="p404" data-depth="0.10">404</p>
        </div>
        <div className="text">
          <article>
            <p>Uh oh! Looks like you got lost. <br />Go back to the homepage if you dare!</p>
            <NavLink to="/">
            <button>Back to home</button>
            </NavLink>
          </article>
        </div>
      </div>
    </section>
  </div>
  )
}

