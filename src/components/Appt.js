import React, { useEffect } from 'react'

export default () => {
  useEffect(() => {
    const id = 'list-booking'
    const myScript = document.getElementById(id)
    if (!myScript) {
      const script = document.createElement('script')
      script.id = 'lisa-booking'
      script.src =
        'https://widget-cdn.simplepractice.com/assets/integration-1.0.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div className="spwidget-button-wrapper">
      <a
        href="https://lisa-randall.clientsecure.me"
        className="spwidget-button"
        data-spwidget-scope-id="af1501ac-98b6-41dc-a28b-8485842ed063"
        data-spwidget-scope-uri="lisa-randall"
        data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
        data-spwidget-scope-global
        data-spwidget-autobind
      >
        Request Appointment
      </a>
    </div>
  )
}
