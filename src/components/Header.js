import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo" />
    <div className="content">
      <div className="inner">
        <h1>Second Story Counseling</h1>
        <div>
          "THE CURIOUS PARADOX IS THAT WHEN I ACCEPT MYSELF JUST AS I AM, THEN I
          CAN CHANGE."
        </div>
        <div>~CARL ROGERS</div>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              props.onOpenArticle('therapists')
            }}
          >
            Therapists
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              props.onOpenArticle('specialties')
            }}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              props.onOpenArticle('events')
            }}
          >
            Groups & Workshops
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              props.onOpenArticle('rates')
            }}
          >
            Rates & Insurance
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
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
