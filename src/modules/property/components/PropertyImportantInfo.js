import React from "react"

import {
  formatPrice,
  formatArea,
  transformCurrencyToSymbol,
} from "@/utils/string-utils"
import { usePropertyContext } from "@/modules/property/components/PropertyProvider"

import PropertyHighlights from "./PropertyHighlights"

const PropertyImportantInfo = () => {
  const property = usePropertyContext()

  const { location, price, currency, totalArea, highlightsSummary } = property

  return (
    <div className="p-8 bg-gray-100 h-full">
      <h1 className="font-varela-round font-bold text-blue-800 text-3xl mb-2">
        {location.streetAddress} {location.specifier}
        <br />
        {location.district}, {location.city}
      </h1>

      <p className="text-gray-700 text-lg mb-12">{highlightsSummary}</p>

      <p className="font-varela-round font-bold text-blue-800 text-3xl mb-2">
        {transformCurrencyToSymbol(currency)}
        {formatPrice(price)}
      </p>

      <p className="text-gray-700 text-lg mb-12">
        {formatArea(totalArea)} ({formatPrice(Math.floor(price / totalArea))} /
        m²)
      </p>

      <PropertyHighlights property={property} />
    </div>
  )
}

export default PropertyImportantInfo
