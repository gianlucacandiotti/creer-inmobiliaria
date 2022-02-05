import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { Property } from "@/models/Property"
import { formatPrice, transformCurrencyToSymbol } from "@/utils/string-utils"

const PropertyCard = ({ data }) => (
  <Link to={data.slug}>
    <div>
      <div className="relative">
        <div className="group absolute top-0 bottom-0 w-full flex items-center justify-center p-4 bg-transparent transition duration-200 ease-in-out hover:bg-blue-800 hover:bg-opacity-75">
          <span className="text-lg text-transparent text-center transition duration-200 ease-in-out group-hover:text-white">
            {data.title}
          </span>
        </div>

        <div>
          <img
            src={data.images[0].image}
            className="object-cover h-60 w-full"
          />
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-blue-800 font-semibold">
          <span>
            {data.location.streetAddress} {data.location.specifier}
          </span>

          <span>
            {transformCurrencyToSymbol(data.currency)}
            {formatPrice(data.price)}
          </span>
        </div>

        <div className="flex justify-between text-sm text-gray-700">
          <span>
            {data.location.district}, {data.location.city}
          </span>

          <span>{data.totalArea}.00 m²</span>
        </div>
      </div>
    </div>
  </Link>
)

PropertyCard.propTypes = {
  data: PropTypes.instanceOf(Property),
}

export default PropertyCard
