import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo" />
    <div className="content">
      <div className="inner">
        <h1>Second Story Counseling</h1>
        <p>
          "THE CURIOUS PARADOX IS THAT WHEN I ACCEPT MYSELF JUST AS I AM, THEN I
          CAN CHANGE." <br />
          ~CARL ROGERS
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="#"
            onClick={() => {
              props.onOpenArticle('therapists')
            }}
          >
            Therapists
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => {
              props.onOpenArticle('specialties')
            }}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => {
              props.onOpenArticle('events')
            }}
          >
            Upcoming Events
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => {
              props.onOpenArticle('rates')
            }}
          >
            Rates & Insurance
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
