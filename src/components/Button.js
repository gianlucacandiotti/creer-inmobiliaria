import React from "react"
import PropTypes from "prop-types"
import { useButton } from "@react-aria/button"

const Button = props => {
  const ref = React.useRef()
  const { buttonProps } = useButton(props, ref)
  const { children } = props

  return (
    <button
      {...buttonProps}
      className="font-varela-round font-bold tracking-widest uppercase text-white bg-blue-200 py-3 px-8 rounded-full shadow-xl hover:bg-blue-300 focus:outline-none focus:ring"
      ref={ref}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
}

export default Button
