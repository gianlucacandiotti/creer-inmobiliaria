import { mapApiToModel as _mapApiToModel } from "@/utils/model-mapper"

export const MODEL_KEY = {
  ID: "id",
  PROPERTY_TYPE: "propertyType",
  OPERATION_TYPE: "operationType",
  TITLE: "title",
  DESCRIPTION: "description",
  DATE: "date",
  FEATURED: "featured",
  LOCATION: "location",
  CURRENCY: "currency",
  PRICE: "price",
  ROOM_COUNT: "roomCount",
  TOTAL_AREA: "totalArea",
  BUILT_AREA: "builtArea",
  CONSTRUCTION_YEAR: "constructionYear",
  CONDITION: "condition",
  FLOOR_NUMBER: "floorNumber",
  COMMERCIAL_LICENSE: "commercialLicense",
  COMMERCIAL_INDUSTRY: "commercialIndustry",
  CONSTRUCTION_PARAMETER: "contructionParameter",
  ZONING: "zoning",
  MUNICIPAL_LICENSE: "municipalLicense",
  FENCED_LOT: "fencedLot",
  IMAGES: "images",
  SLUG: "slug",
}

export function Property(data) {
  this[MODEL_KEY.ID] = data?.id || ""
  this[MODEL_KEY.PROPERTY_TYPE] = data?.propertyType || ""
  this[MODEL_KEY.OPERATION_TYPE] = data?.operationType || ""
  this[MODEL_KEY.TITLE] = data?.title || ""
  this[MODEL_KEY.DESCRIPTION] = data?.description || ""
  this[MODEL_KEY.DATE] = data?.date || null
  this[MODEL_KEY.FEATURED] = data?.featured || false
  this[MODEL_KEY.LOCATION] = data?.location || {}
  this[MODEL_KEY.CURRENCY] = data?.currency || ""
  this[MODEL_KEY.PRICE] = data?.price || 0
  this[MODEL_KEY.ROOM_COUNT] = data?.roomCount || 0
  this[MODEL_KEY.TOTAL_AREA] = data?.totalArea || 0
  this[MODEL_KEY.BUILT_AREA] = data?.builtArea || 0
  this[MODEL_KEY.CONSTRUCTION_YEAR] = data?.constructionYear || 0
  this[MODEL_KEY.CONDITION] = data?.condition || ""
  this[MODEL_KEY.FLOOR_NUMBER] = data?.floorNumber || 0
  this[MODEL_KEY.COMMERCIAL_LICENSE] = data?.commercialLicense || ""
  this[MODEL_KEY.COMMERCIAL_INDUSTRY] = data?.commercialIndustry || ""
  this[MODEL_KEY.CONSTRUCTION_PARAMETER] = data?.contructionParameter || ""
  this[MODEL_KEY.ZONING] = data?.zoning || ""
  this[MODEL_KEY.MUNICIPAL_LICENSE] = data?.municipalLicense || ""
  this[MODEL_KEY.FENCED_LOT] = data?.fencedLot || false
  this[MODEL_KEY.IMAGES] = data?.images || []
  this[MODEL_KEY.SLUG] = data?.slug || ""
}

const propertyToApiMap = [
  [MODEL_KEY.ID, "id"],
  [MODEL_KEY.PROPERTY_TYPE, "frontmatter.property_type"],
  [MODEL_KEY.OPERATION_TYPE, "frontmatter.operation_type"],
  [MODEL_KEY.TITLE, "frontmatter.title"],
  [MODEL_KEY.DESCRIPTION, "frontmatter.description"],
  [MODEL_KEY.DATE, "frontmatter.date"],
  [MODEL_KEY.FEATURED, "frontmatter.featured"],
  [
    apiObj => ({
      [MODEL_KEY.LOCATION]: {
        streetAddress: apiObj.frontmatter.location_street_address,
        specifier: apiObj.frontmatter.location_specifier,
        district: apiObj.frontmatter.location_district,
        city: apiObj.frontmatter.location_city,
        geojson: apiObj.frontmatter.location_map,
      },
    }),
  ],
  [MODEL_KEY.CURRENCY, "frontmatter.currency"],
  [MODEL_KEY.PRICE, "frontmatter.price"],
  [MODEL_KEY.ROOM_COUNT, "frontmatter.room_count"],
  [MODEL_KEY.TOTAL_AREA, "frontmatter.total_area"],
  [MODEL_KEY.BUILT_AREA, "frontmatter.built_area"],
  [MODEL_KEY.CONSTRUCTION_YEAR, "frontmatter.construction_year"],
  [MODEL_KEY.CONDITION, "frontmatter.condition"],
  [MODEL_KEY.FLOOR_NUMBER, "frontmatter.floor_number"],
  [MODEL_KEY.COMMERCIAL_LICENSE, "frontmatter.commercial_license"],
  [MODEL_KEY.COMMERCIAL_INDUSTRY, "frontmatter.commercial_industry"],
  [MODEL_KEY.CONSTRUCTION_PARAMETER, "frontmatter.contruction_parameter"],
  [MODEL_KEY.ZONING, "frontmatter.zoning"],
  [MODEL_KEY.MUNICIPAL_LICENSE, "frontmatter.municipal_license"],
  [MODEL_KEY.FENCED_LOT, "frontmatter.fenced_lot"],
  [MODEL_KEY.IMAGES, "frontmatter.images"],
  [MODEL_KEY.SLUG, "fields.slug"],
]

export const propertyMapper = {
  mapApiToModel: apiObject =>
    _mapApiToModel(apiObject, propertyToApiMap, Property),
}
