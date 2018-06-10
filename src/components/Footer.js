import React from 'react'
import Appt from './Appt.js'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
      <Appt />
      <p className="copyright">&copy; Lisa Randall Therapy.</p>
    </footer>
)

Footer.propTypes = {
    timeout: React.PropTypes.bool
}

export default Footer
