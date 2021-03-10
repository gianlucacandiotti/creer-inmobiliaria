import React from "react"
import cx from "classnames"
import PropTypes from "prop-types"

import { PropertyProps } from "@/types/property"
import PropertyHighlight from "@/components/PropertyHighlight"
import Button from "@/components/Button"

const PropertiesHighlight = ({ data: properties }) => (
  <div className="py-12 px-6 xl:container">
    <h2 className="font-varela-round font-bold text-blue-800 text-4xl text-center mb-12">
      Nuestro Exclusivo Catálogo De Propiedades
    </h2>

    <div className="sm:flex sm:justify-between sm:space-x-6 xl:space-x-8">
      {properties.map((property, i) => (
        <div
          key={property.id}
          className={cx([
            {
              "hidden lg:block": properties.length - 1 === i,
            },
          ])}
        >
          <PropertyHighlight data={property} />
        </div>
      ))}
    </div>

    <div className="flex justify-center py-8">
      <Button>VER TODAS LAS PROPIEDADES</Button>
    </div>
  </div>
)

PropertiesHighlight.propTypes = {
  data: PropTypes.arrayOf(PropertyProps),
}

export default PropertiesHighlight
