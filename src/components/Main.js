import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Appt from '../components/Appt.js'
import pic03 from '../images/mom-and-son-optimized.jpg'

const Main = props => {
  const data = useStaticQuery(graphql`
    query MainQuery {
      bios: allWpBio(sort: {fields: date, order: ASC}) {
        edges {
          node {
            title
            content
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 300
                      placeholder: DOMINANT_COLOR
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
          }
        }
      }
      specialties: wpPage(slug: { eq: "services-and-specialties" }) {
        title
        content
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
      events: wpPage(slug: { eq: "upcoming-events" }) {
        title
        content
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
      rates: wpPage(slug: { eq: "rates-and-insurance" }) {
        title
        content
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
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
      <article
        id="therapists"
        className={`${props.article === 'therapists' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        {data.bios.edges.map(edge => {
          const image = getImage(edge.node?.featuredImage.node.localFile)
          return (
            <div>
              <h2 className="major">{edge.node.title}</h2>
              <div className="profile-container">
                <GatsbyImage
                  className="profile"
                  image={image}
                  alt={edge.node.title}
                />
              </div>
              <div dangerouslySetInnerHTML={{ __html: edge.node.content }} />
            </div>
          )
        })}
        <Appt />
        {close}
      </article>

      <article
        id="specialties"
        className={`${props.article === 'specialties' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">{data.specialties.title}</h2>
        <GatsbyImage
          image={getImage(data.specialties?.featuredImage?.node?.localFile)}
          alt={data.specialties.title}
        />
        <div dangerouslySetInnerHTML={{ __html: data.specialties.content }} />
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
        <GatsbyImage
          image={getImage(data.events?.featuredImage?.node?.localFile)}
          alt={data.events.title}
        />
        <div dangerouslySetInnerHTML={{ __html: data.events.content }} />
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
        <GatsbyImage
          image={getImage(data.rates?.featuredImage?.node?.localFile)}
          alt={data.rates.title}
        />
        <div dangerouslySetInnerHTML={{ __html: data.rates.content }} />
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
                <a href="tel:4806888282">(480) 688-8282</a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <h3>Email</h3>
              <p>
                <a href="mailto:info@secondstorycounselinggroup.com">
                  info@secondstorycounselinggroup.com
                </a>
              </p>
            </div>
            <div className="column">
              <h3>Social</h3>
              <ul className="icons">
                <li>
                  <a
                    href="https://www.facebook.com/lisarandallLMSW"
                    className="icon fa-facebook"
                  >
                    <span className="label">Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/lisarandalltherapy"
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
