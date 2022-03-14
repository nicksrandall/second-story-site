import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { StructuredText } from 'react-datocms'
import Appt from './Appt'

export default function Therapists(props) {
  const [bio, setBio] = React.useState('')
  let close = (
    <div
      className="close"
      onClick={() => {
        props.onClose()
      }}
    />
  )

  return (
    <article
      id="therapists"
      className={`${props.article === 'therapists' ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      {props.data.map((edge) => {
        console.log('edge', edge)
        return (
          <div className="profile-main">
            <h2 className="major">{edge.node.name}</h2>
            <div className="profile-container">
              <GatsbyImage
                className="profile"
                image={edge.node.image.gatsbyImageData}
                alt={edge.node.name}
              />
            </div>
            <div
              className={'view-bio'}
              onClick={() =>
                setBio(edge.node.name === bio ? '' : edge.node.name)
              }
            >
              {edge.node.name !== bio ? 'VIEW BIO' : 'CLOSE BIO'}
            </div>
            <div
              style={{ marginBottom: '2rem' }}
              className={`bio ${
                edge.node.name === bio ? 'bio-open' : 'bio-close'
              }`}
            >
              <StructuredText data={edge.node.content} />
            </div>
            <Appt />
          </div>
        )
      })}
      {close}
    </article>
  )
}
