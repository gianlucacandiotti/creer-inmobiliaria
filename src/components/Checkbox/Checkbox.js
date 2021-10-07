import React from "react"
import PropTypes from "prop-types"
import { FaCheck } from "@react-icons/all-files/fa/FaCheck"

import "./checkbox.css"

const Checkbox = ({ inputProps, label, error }) => {
  return (
    <div className="flex flex-col items-start">
      <label htmlFor={inputProps.name} className="flex items-center">
        <input
          id={inputProps.name}
          type="checkbox"
          {...inputProps}
          className="custom-checkbox-input"
        />

        <div className="custom-checkbox-box border-blue-700 border border-solid rounded w-6 h-6 flex items-center justify-center bg-white">
          <FaCheck className="custom-checkbox-icon text-blue-700" />
        </div>

        <span className="text-sm text-blue-700 ml-2">{label}</span>
      </label>

      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  )
}

Checkbox.propTypes = {
  inputProps: PropTypes.object,
  label: PropTypes.string,
  error: PropTypes.string,
}

export default Checkbox
