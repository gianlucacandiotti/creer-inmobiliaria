import React from "react"
import PropTypes from "prop-types"
import { useButton } from "@react-aria/button"
import classNames from "classnames"

const Button = props => {
  const ref = React.useRef()
  const { buttonProps } = useButton(props, ref)
  const { children, cta = false } = props

  return (
    <button
      {...buttonProps}
      className={classNames(
        "font-varela-round font-bold tracking-widest uppercase text-white bg-blue-200 py-3 px-8 rounded-full shadow-xl hover:bg-blue-300 focus:outline-none focus:ring",
        {
          "bg-blue-700 hover:bg-blue-800": cta,
        }
      )}
      ref={ref}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  cta: PropTypes.bool,
}

export default Button
