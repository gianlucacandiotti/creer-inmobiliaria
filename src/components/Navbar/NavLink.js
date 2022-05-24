import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const typeToClassNameMap = {
  main:
    "block text-pink-600 font-semibold white p-4 sm:flex sm:items-center sm:p-2 sm:text-blue-900 sm:border-b-2 sm:border-transparent sm:hover:border-pink-600 sm:focus:border-pink-600 sm:h-full",
  submenu: "py-2 px-8 hover:bg-blue-50 focus:bg-blue-50",
}

const NavLink = ({ to, type = "main", children }) => {
  const className = typeToClassNameMap[type]

  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  )
}

NavLink.propTypes = {
  to: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
}

export default NavLink
