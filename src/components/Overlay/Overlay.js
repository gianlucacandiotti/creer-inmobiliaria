import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

import "./overlay.css"

const OverlayContent = ({ children }) => {
  return (
    <div className="custom-overlay-content overlay-content hidden absolute top-full group-hover:block">
      {children}
    </div>
  )
}

OverlayContent.propTypes = {
  children: PropTypes.node,
}

const Overlay = ({ children, ...rest }) => {
  return (
    <div
      {...rest}
      className={cx("custom-overlay relative z-10 group", rest.className)}
    >
      {children}
    </div>
  )
}

Overlay.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
}

Overlay.Content = OverlayContent

export default Overlay
