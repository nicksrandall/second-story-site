import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
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
        const image = getImage(edge.node?.featuredImage.node.localFile)
        return (
          <div className="profile-main">
            <h2 className="major">{edge.node.title}</h2>
            <div className="profile-container">
              <GatsbyImage
                className="profile"
                image={image}
                alt={edge.node.title}
              />
            </div>
            <div
              className={'view-bio'}
              onClick={() =>
                setBio(edge.node.title === bio ? '' : edge.node.title)
              }
            >
              {edge.node.title !== bio ? 'VIEW BIO' : 'CLOSE BIO'}
            </div>
            <div
              className={`bio ${
                edge.node.title === bio ? 'bio-open' : 'bio-close'
              }`}
              dangerouslySetInnerHTML={{ __html: edge.node.content }}
            />
            <Appt />
          </div>
        )
      })}
      {close}
    </article>
  )
}
