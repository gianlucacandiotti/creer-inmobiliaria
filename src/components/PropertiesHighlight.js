import React from "react"

import { PropertyProps } from "@/types/property"
import { formatPrice, transformCurrencyToSymbol } from "@/utils/string-utils"

const PropertiesHighlight = ({ data: properties }) => (
  <div className="p-6">
    <h2 className="font-varela-round font-bold text-blue-800 text-4xl text-center mb-8">
      Nuestro Exclusivo Catálogo De Propiedades
    </h2>

    <div>
      {properties.map(property => (
        <div key={property.id} className="mb-6 last:mb-0">
          <div className="relative">
            <div className="group absolute top-0 bottom-0 w-full flex items-center justify-center p-4 bg-transparent transition duration-200 ease-in-out hover:bg-blue-800 hover:bg-opacity-75">
              <span className="text-lg text-transparent text-center font-light transition duration-200 ease-in-out group-hover:text-white">
                {property.title}
              </span>
            </div>

            <div>
              <img
                src="https://blok-production.imgix.net/photos/ff16bfe2-566d-487e-9502-f841d0c48fb6/1612773961_87480ec0.jpg?w=600"
                className="object-cover h-56 w-full"
              />
            </div>
          </div>

          <div className="py-4">
            <div className="flex justify-between text-blue-800 font-semibold">
              <span>
                {property.locationStreetAddress} {property.locationSpecifier}
              </span>

              <span>
                {transformCurrencyToSymbol(property.currency)}
                {formatPrice(property.price)}
              </span>
            </div>

            <div className="flex justify-between text-sm text-gray-700">
              <span>
                {property.locationDistrict}, {property.locationCity}
              </span>

              <span>{property.areaTotal}.00 m²</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

PropertiesHighlight.propTypes = {
  data: PropertyProps,
}

export default PropertiesHighlight
