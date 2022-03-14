import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { StructuredText } from 'react-datocms'

import Therapists from './therapists.js'
import Appt from '../components/Appt.js'
import pic03 from '../images/mom-and-son-optimized.jpg'

const Main = (props) => {
  // const data = {};
  const data = useStaticQuery(graphql`
    query MainQuery {
      bios: allDatoCmsBio(sort: { order: ASC, fields: position }) {
        edges {
          node {
            name
            image {
              gatsbyImageData(width: 300, placeholder: DOMINANT_COLOR)
            }
            content {
              value
            }
          }
        }
      }
      specialties: datoCmsSpecialty {
        title
        content {
          value
        }
        image {
          gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
      }
      events: datoCmsEvent {
        title
        content {
          value
        }
      }
      rates: datoCmsEvent {
        title
        content {
          value
        }
      }
    }
  `)

  let close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    />
  )

  return (
    <div
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <Therapists
        articleTimeout={props.articleTimeout}
        article={props.article}
        onClose={props.onCloseArticle}
        data={data.bios.edges}
      />

      <article
        id="specialties"
        className={`${props.article === 'specialties' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">{data.specialties.title}</h2>
        <GatsbyImage
          image={data.specialties?.image?.gatsbyImageData}
          alt={data.specialties.title}
          style={{ marginBottom: '2rem' }}
        />
        <div style={{ display: 'none' }}>
          <StructuredText data={data.specialties.content} />
        </div>
        <Appt />
        {close}
      </article>

      <article
        id="events"
        className={`${props.article === 'events' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">{data.events.title}</h2>
        <div
          style={{ marginBottom: '2rem' }}
>
          <StructuredText data={data.events.content} />
        </div>
        <Appt />
        {close}
      </article>

      <article
        id="rates"
        className={`${props.article === 'rates' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">{data.rates.title}</h2>
        <div
          style={{ marginBottom: '2rem' }}
>
          <StructuredText data={data.rates.content} />
        </div>
        <Appt />
        {close}
      </article>

      <article
        id="contact"
        className={`${props.article === 'contact' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Contact</h2>
        <span className="image main no-tint">
          <img src={pic03} alt="" />
        </span>
        <Appt />
        <div className="content__container">
          <div className="row">
            <div className="column">
              <h3>Address</h3>
              <p>
                <a href="https://www.google.com/maps/place/4320+E+Brown+Rd,+Mesa,+AZ+85205">
                  Second Story Counseling
                  <br />
                  4320 E. Brown Road
                  <br />
                  Mesa, AZ 85205
                </a>
              </p>
            </div>
            <div className="column">
              <h3>Phone</h3>
              <p>
                <a href="tel:6025295177">(602) 529-5177</a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <h3>Email</h3>
              <p>
                <a href="mailto:info@mysecondstory.com">
                  info@mysecondstory.com
                </a>
              </p>
            </div>
            <div className="column">
              <h3>Social</h3>
              <ul className="icons">
                <li>
                  <a
                    href="https://www.facebook.com/secondstorycounselingservices"
                    className="icon fa-facebook"
                  >
                    <span className="label">Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/secondstorycounseling"
                    className="icon fa-instagram"
                  >
                    <span className="label">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {close}
      </article>
    </div>
  )
}

export default Main
