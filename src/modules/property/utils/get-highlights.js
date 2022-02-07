import { BsFillHouseDoorFill } from "react-icons-all-files/bs/BsFillHouseDoorFill"
import { BsBuilding } from "react-icons-all-files/bs/BsBuilding"
import { BsBricks } from "react-icons-all-files/bs/BsBricks"
import { BsShop } from "react-icons-all-files/bs/BsShop"
import { BsBorderOuter } from "react-icons-all-files/bs/BsBorderOuter"
import { BsHammer } from "react-icons-all-files/bs/BsHammer"
import { BsStars } from "react-icons-all-files/bs/BsStars"
import { BsBriefcase } from "react-icons-all-files/bs/BsBriefcase"
import { GiElevator } from "react-icons-all-files/gi/GiElevator"
import { GrDocumentText } from "react-icons-all-files/gr/GrDocumentText"

import { formatArea } from "@/utils/string-utils"
import { MODEL_KEY as PROPERTY_MODEL_KEY } from "@/models/Property"
import { PROPERTY_TYPE, OPERATION_TYPE } from "@/constants/property-constants"

const mapPropertyTypeToHighlight = {
  [PROPERTY_TYPE.HOUSE]: {
    icon: BsFillHouseDoorFill,
    text: "Casa",
  },
  [PROPERTY_TYPE.APARTMENT]: {
    icon: BsBuilding,
    text: "Departamento",
  },
  [PROPERTY_TYPE.LOT]: {
    icon: BsBricks,
    text: "Terreno",
  },
  [PROPERTY_TYPE.COMMERCIAL]: {
    icon: BsShop,
    text: "Local comercial",
  },
}

const mapFieldToHighlight = {
  [PROPERTY_MODEL_KEY.TOTAL_AREA]: {
    label: "Área total",
    icon: BsBorderOuter,
    formatter: formatArea,
  },
  [PROPERTY_MODEL_KEY.CONSTRUCTION_YEAR]: {
    label: "Año de construcción",
    icon: BsHammer,
  },
  [PROPERTY_MODEL_KEY.CONDITION]: {
    label: "Estado de Conservación",
    icon: BsStars,
  },
  [PROPERTY_MODEL_KEY.FLOOR_NUMBER]: {
    label: "Número de piso",
    icon: GiElevator,
  },
  [PROPERTY_MODEL_KEY.COMMERCIAL_INDUSTRY]: {
    label: "Rubro Comercial",
    icon: BsBriefcase,
  },
  [PROPERTY_MODEL_KEY.COMMERCIAL_LICENSE]: {
    label: "Licencia Comercial ",
    icon: GrDocumentText,
  },
  [PROPERTY_MODEL_KEY.CONSTRUCTION_PARAMETER]: {
    label: "Parámetro de Edificación",
    icon: GrDocumentText,
  },
  [PROPERTY_MODEL_KEY.ZONING]: {
    label: "Zonificación",
    icon: GrDocumentText,
  },
}

const mapHighlightsByPropertyType = {
  [OPERATION_TYPE.SELL]: {
    [PROPERTY_TYPE.HOUSE]: [
      PROPERTY_MODEL_KEY.TOTAL_AREA,
      PROPERTY_MODEL_KEY.CONSTRUCTION_YEAR,
      PROPERTY_MODEL_KEY.CONDITION,
    ],
    [PROPERTY_TYPE.APARTMENT]: [
      PROPERTY_MODEL_KEY.TOTAL_AREA,
      PROPERTY_MODEL_KEY.CONSTRUCTION_YEAR,
      PROPERTY_MODEL_KEY.FLOOR_NUMBER,
    ],
    [PROPERTY_TYPE.LOT]: [
      PROPERTY_MODEL_KEY.TOTAL_AREA,
      PROPERTY_MODEL_KEY.CONSTRUCTION_YEAR,
      PROPERTY_MODEL_KEY.COMMERCIAL_INDUSTRY,
    ],
    [PROPERTY_TYPE.COMMERCIAL]: [
      PROPERTY_MODEL_KEY.TOTAL_AREA,
      PROPERTY_MODEL_KEY.CONSTRUCTION_PARAMETER,
      PROPERTY_MODEL_KEY.ZONING,
    ],
  },
  [OPERATION_TYPE.RENT]: {
    [PROPERTY_TYPE.HOUSE]: [
      PROPERTY_MODEL_KEY.TOTAL_AREA,
      PROPERTY_MODEL_KEY.CONSTRUCTION_YEAR,
      PROPERTY_MODEL_KEY.CONDITION,
    ],
    [PROPERTY_TYPE.APARTMENT]: [
      PROPERTY_MODEL_KEY.TOTAL_AREA,
      PROPERTY_MODEL_KEY.CONSTRUCTION_YEAR,
      PROPERTY_MODEL_KEY.FLOOR_NUMBER,
    ],
    [PROPERTY_TYPE.LOT]: [
      PROPERTY_MODEL_KEY.TOTAL_AREA,
      PROPERTY_MODEL_KEY.COMMERCIAL_LICENSE,
      PROPERTY_MODEL_KEY.COMMERCIAL_INDUSTRY,
    ],
    [PROPERTY_TYPE.COMMERCIAL]: [
      PROPERTY_MODEL_KEY.TOTAL_AREA,
      PROPERTY_MODEL_KEY.CONSTRUCTION_PARAMETER,
      PROPERTY_MODEL_KEY.ZONING,
    ],
  },
}

export const getPropertyHighlights = property => {
  const propertyTypeHighlight = [
    {
      label: "Tipo de vivienda",
      ...mapPropertyTypeToHighlight[property.propertyType],
    },
  ]

  const highlightFieldsForPropertyType =
    mapHighlightsByPropertyType[property.operationType][property.propertyType]

  const propertyHighlights = highlightFieldsForPropertyType.map(field => ({
    ...mapFieldToHighlight[field],
    text: property[field],
  }))

  return [...propertyTypeHighlight, ...propertyHighlights]
}
