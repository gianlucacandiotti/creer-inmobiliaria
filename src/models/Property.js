import { mapApiToModel as _mapApiToModel } from "@/utils/model-mapper"

export function Property(data) {
  this.id = data?.id || ""
  this.title = data?.title || ""
  this.description = data?.description || ""
  this.date = data?.date || null
  this.featured = data?.featured || false
  this.location = data?.location || ""
  this.currency = data?.currency || ""
  this.price = data?.price || 0
  this.roomCount = data?.roomCount || 0
  this.areaTotal = data?.areaTotal || 0
  this.images = data?.images || []
}

const propertyToApiMap = [
  ["id", "id"],
  ["title", "frontmatter.title"],
  ["description", "frontmatter.description"],
  ["date", "frontmatter.date"],
  ["featured", "frontmatter.featured"],
  [
    apiObj => ({
      location: {
        streetAddress: apiObj.frontmatter.location_street_address,
        specifier: apiObj.frontmatter.location_specifier,
        district: apiObj.frontmatter.location_district,
        city: apiObj.frontmatter.location_city,
      },
    }),
  ],
  ["currency", "frontmatter.currency"],
  ["price", "frontmatter.price"],
  ["roomCount", "frontmatter.room_count"],
  ["areaTotal", "frontmatter.area_total"],
  ["images", "frontmatter.images"],
]

export const propertyMapper = {
  mapApiToModel: apiObject =>
    _mapApiToModel(apiObject, propertyToApiMap, Property),
}
