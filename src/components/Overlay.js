import React from "react"
import PropTypes from "prop-types"

const OverlayContent = ({ children }) => {
  return (
    <div className="hidden absolute top-full group-hover:block">{children}</div>
  )
}

OverlayContent.propTypes = {
  children: PropTypes.node,
}

const Overlay = ({ children }) => {
  return <div className="relative z-10 group">{children}</div>
}

Overlay.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
}

Overlay.Content = OverlayContent

export default Overlay
