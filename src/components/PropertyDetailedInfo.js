import React from "react"
import PropTypes from "prop-types"

const PropertyDetailedInfo = ({ title, columns }) => {
  return (
    <div>
      <span className="block text-3xl font-semibold mb-6 text-blue-800">
        {title}
      </span>

      <div className={`grid grid-cols-${columns.length} gap-6`}>
        {columns.map(column =>
          column.map(item => (
            <div key={item.title} className="grid grid-cols-2 gap-6">
              <span className="block text-lg text-blue-800">{item.title}:</span>
              <span className="block text-lg text-gray-700">{item.value}</span>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

PropertyDetailedInfo.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        value: PropTypes.string,
      })
    )
  ),
}

export default PropertyDetailedInfo
