import React from "react"
import PropTypes from "prop-types"

import { Property, MODEL_KEY as PROPERTY_MODEL_KEY } from "@/models/Property"

export const getDefaultPropertyContextValue = overrides => ({
  [PROPERTY_MODEL_KEY.ID]: "",
  [PROPERTY_MODEL_KEY.PROPERTY_TYPE]: "",
  [PROPERTY_MODEL_KEY.OPERATION_TYPE]: "",
  [PROPERTY_MODEL_KEY.TITLE]: "",
  [PROPERTY_MODEL_KEY.DESCRIPTION]: "",
  [PROPERTY_MODEL_KEY.DATE]: null,
  [PROPERTY_MODEL_KEY.FEATURED]: false,
  [PROPERTY_MODEL_KEY.LOCATION]: {},
  [PROPERTY_MODEL_KEY.CURRENCY]: "",
  [PROPERTY_MODEL_KEY.PRICE]: 0,
  [PROPERTY_MODEL_KEY.ROOM_COUNT]: 0,
  [PROPERTY_MODEL_KEY.TOTAL_AREA]: 0,
  [PROPERTY_MODEL_KEY.CONSTRUCTION_YEAR]: "",
  [PROPERTY_MODEL_KEY.CONDITION]: "",
  [PROPERTY_MODEL_KEY.FLOOR_NUMBER]: 0,
  [PROPERTY_MODEL_KEY.COMMERCIAL_LICENSE]: "",
  [PROPERTY_MODEL_KEY.COMMERCIAL_INDUSTRY]: "",
  [PROPERTY_MODEL_KEY.CONSTRUCTION_PARAMETER]: "",
  [PROPERTY_MODEL_KEY.ZONING]: "",
  [PROPERTY_MODEL_KEY.MUNICIPAL_LICENSE]: "",
  [PROPERTY_MODEL_KEY.FENCED_LOT]: false,
  [PROPERTY_MODEL_KEY.IMAGES]: [],
  [PROPERTY_MODEL_KEY.SLUG]: "",
  ...overrides,
})

export const PropertyContext = React.createContext(
  getDefaultPropertyContextValue()
)

export const usePropertyContext = () => React.useContext(PropertyContext)

export const useProvidePropertyContext = ({ data }) => {
  return {
    ...data,
  }
}

export const PropertyProvider = ({ propertyData, children }) => {
  const shareContextValue = useProvidePropertyContext({ data: propertyData })

  return (
    <PropertyContext.Provider value={shareContextValue}>
      {children}
    </PropertyContext.Provider>
  )
}

PropertyProvider.propTypes = {
  propertyData: PropTypes.instanceOf(Property),
  children: PropTypes.node,
}
