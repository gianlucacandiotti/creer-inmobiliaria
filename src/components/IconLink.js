import React from "react"
import PropTypes from "prop-types"

const IconLink = ({ children, ...props }) => {
  return (
    <a
      {...props}
      className="flex justify-center items-center w-10 h-10 text-xl text-blue-800 bg-white rounded-full shadow-lg"
    >
      {children}
    </a>
  )
}

IconLink.propTypes = {
  children: PropTypes.node,
}

export default IconLink
