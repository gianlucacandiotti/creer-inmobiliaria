import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

import { Property, propertyMapper } from "@/models/Property"
import PropertyHighlight from "@/components/PropertyHighlight"

const PropertyRoll = ({ data: properties = [] }) => {
  console.log("property: ", properties)
  return (
    <div>
      {properties.map(property => (
        <div key={property.id}>
          <PropertyHighlight data={property} />
        </div>
      ))}
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
