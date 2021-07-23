import React from "react"
import PropTypes from "prop-types"
import { FaPlus } from "@react-icons/all-files/fa/FaPlus"
import classNames from "classnames"

const PropertyDescription = ({ title, description }) => {
  const [descriptionExpanded, setDescriptionExpanded] = React.useState(false)

  return (
    <div>
      <span className="block text-2xl font-semibold mb-4 text-blue-800">
        {title}
      </span>

      <p
        className={classNames(
          "text-lg leading-8 whitespace-pre-line text-gray-800 relative max-h-48 transition-size duration-1000 ease-in-out overflow-hidden md:max-h-full ",
          {
            "max-h-1248": descriptionExpanded,
          }
        )}
      >
        {description}
        {!descriptionExpanded && (
          <span
            className="absolute top-1/2 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-white md:hidden"
            aria-hidden="true"
          />
        )}
      </p>

      {!descriptionExpanded && (
        <button
          className="flex justify-between items-center text-lg text-blue-800 font-semibold mt-3 md:hidden"
          onClick={() => setDescriptionExpanded(!descriptionExpanded)}
        >
          <FaPlus className="text-xl mr-1" /> LEER DESCRIPCIÓN COMPLETA
        </button>
      )}
    </div>
  )
}

PropertyDescription.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default PropertyDescription
