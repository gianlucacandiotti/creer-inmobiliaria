import React from "react"
import cx from "classnames"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

import { Property, propertyMapper } from "@/models/Property"
import PropertyHighlight from "@/components/PropertyHighlight"
import Button from "@/components/Button"

const PropertiesHighlight = ({ data: properties }) => (
  <div className="container py-12">
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
  data: PropTypes.arrayOf(PropTypes.instanceOf(Property)),
}

export default () => (
  <StaticQuery
    query={graphql`
      query FeaturedPropertiesQuery {
        allMarkdownRemark(
          limit: 3
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
      <PropertiesHighlight
        data={data.allMarkdownRemark.nodes.map(property =>
          propertyMapper.mapApiToModel(property)
        )}
      />
    )}
  />
)
