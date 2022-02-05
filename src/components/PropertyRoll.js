import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

import { Property, propertyMapper } from "@/models/Property"
import PropertyCard from "@/components/PropertyCard"

const PropertyRoll = ({ data: properties = [] }) => {
  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map(property => (
          <PropertyCard key={property.id} data={property} />
        ))}
      </div>
    </div>
  )
}

PropertyRoll.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Property)),
}

export default () => (
  <StaticQuery
    query={graphql`
      query PropertiesRollQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "property" } } }
          sort: { fields: frontmatter___title, order: DESC }
        ) {
          nodes {
            id
            frontmatter {
              title
              description
              date
              featured
              location_street_address
              location_specifier
              location_district
              location_city
              currency
              price
              room_count
              area_total
              images {
                image
              }
            }
            fields {
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <PropertyRoll
        data={data.allMarkdownRemark.nodes.map(property =>
          propertyMapper.mapApiToModel(property)
        )}
      />
    )}
  />
)
