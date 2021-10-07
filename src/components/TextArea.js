import React from "react"
import PropTypes from "prop-types"

const TextArea = ({ inputProps, label, error }) => {
  return (
    <div className="flex flex-col items-start">
      <label htmlFor={inputProps.name} className="text-sm text-blue-700 mb-1">
        {label}
      </label>

      <textarea
        id={inputProps.name}
        {...inputProps}
        rows="4"
        className="w-full p-2 rounded-lg border-blue-700 border"
      />

      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  )
}

TextArea.propTypes = {
  inputProps: PropTypes.object,
  label: PropTypes.string,
  error: PropTypes.string,
}

export default TextArea
