import React from 'react'
import Appt from './Appt.js'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <Appt />
    <p className="copyright">&copy; Second Story Counseling.</p>
  </footer>
)

export default Footer
