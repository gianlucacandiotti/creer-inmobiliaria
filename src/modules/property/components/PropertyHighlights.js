import React from "react"
import PropTypes from "prop-types"

import { Property } from "@/models/Property"
import { getPropertyHighlights } from "@/modules/property/utils/get-highlights"

const PropertyHighlight = ({ Icon, label, text, formatter }) => (
  <div className="flex items-center space-x-2">
    <Icon className="h-9 w-9 text-blue-800 flex-shrink-0" />

    <div>
      <p className="text-sm">{label}</p>

      <p className="font-bold">{formatter ? formatter(text) : text}</p>
    </div>
  </div>
)

PropertyHighlight.propTypes = {
  Icon: PropTypes.element,
  label: PropTypes.string,
  text: PropTypes.string,
  formatter: PropTypes.func,
}

const PropertyHighlights = ({ property }) => {
  const highlights = getPropertyHighlights(property)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {highlights.map(highlight => (
        <PropertyHighlight
          key={highlight.label}
          Icon={highlight.icon}
          label={highlight.label}
          text={highlight.text}
          formatter={highlight.formatter}
        />
      ))}
    </div>
  )
}
PropertyHighlights.propTypes = {
  property: PropTypes.instanceOf(Property),
}

export default PropertyHighlights
