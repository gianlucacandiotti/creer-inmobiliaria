import React from "react"
import { BsBuilding } from "react-icons-all-files/bs/BsBuilding"

import { formatPrice, transformCurrencyToSymbol } from "@/utils/string-utils"
import { usePropertyContext } from "@/modules/property/components/PropertyProvider"
import { getPropertyHighlights } from "@/modules/property/utils/get-highlights"

const PropertyHighlights = () => {
  const property = usePropertyContext()

  const { location, price, currency, totalArea } = property

  const highlights = getPropertyHighlights(property)

  console.log("highlights: ", highlights)

  return (
    <div className="p-8 bg-gray-100 h-full">
      <h1 className="font-varela-round font-bold text-blue-800 text-3xl mb-2">
        {location.streetAddress} {location.specifier}
        <br />
        {location.district}, {location.city}
      </h1>

      <p className="text-gray-700 text-lg mb-12">
        6 rooms, kitchen, bathroom, sauna, 2 separate toilets, balcony, roof
        terrace, storage room
      </p>

      <p className="font-varela-round font-bold text-blue-800 text-3xl mb-2">
        {transformCurrencyToSymbol(currency)}
        {formatPrice(price)}
      </p>

      <p className="text-gray-700 text-lg mb-12">
        {totalArea}.00 m² ({formatPrice(Math.floor(price / totalArea))} / m²)
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex items-center space-x-2">
          <BsBuilding className="h-9 w-9 text-blue-800 flex-shrink-0" />

          <div>
            <p className="text-sm">Tipo de vivienda</p>

            <p className="font-bold">Departamento</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <BsBuilding className="h-9 w-9 text-blue-800 flex-shrink-0" />

          <div>
            <p className="text-sm">Tipo de vivienda</p>

            <p className="font-bold">Departamento</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <BsBuilding className="h-9 w-9 text-blue-800 flex-shrink-0" />

          <div>
            <p className="text-sm">Tipo de vivienda</p>

            <p className="font-bold">Departamento</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <BsBuilding className="h-9 w-9 text-blue-800 flex-shrink-0" />

          <div>
            <p className="text-sm">Tipo de vivienda</p>

            <p className="font-bold">Departamento</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyHighlights
