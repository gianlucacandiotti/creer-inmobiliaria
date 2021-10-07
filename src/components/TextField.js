import React from "react"
import PropTypes from "prop-types"

const TextField = ({ inputProps, type, label, error }) => {
  return (
    <div className="flex flex-col items-start">
      <label htmlFor={inputProps.name} className="text-sm text-blue-700 mb-1">
        {label}
      </label>

      <input
        id={inputProps.name}
        type={type}
        {...inputProps}
        className="w-full p-2 rounded-lg border-blue-700 border"
      />

      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  )
}

TextField.propTypes = {
  inputProps: PropTypes.object,
  type: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
}

export default TextField
