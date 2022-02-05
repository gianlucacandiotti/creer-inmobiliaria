import React from "react"
import cx from "classnames"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"

import { Property, propertyMapper } from "@/models/Property"
import PropertyCard from "@/components/PropertyCard"
import Button from "@/components/Button"

const FeaturedProperties = ({ data: properties }) => (
  <div className="container py-12">
    <h2 className="font-varela-round font-bold text-blue-800 text-4xl text-center mb-12">
      Nuestro Exclusivo Catálogo De Propiedades
    </h2>

    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((property, i) => (
        <div
          key={property.id}
          className={cx([
            {
              "hidden lg:block": properties.length - 1 === i,
            },
          ])}
        >
          <PropertyCard data={property} />
        </div>
      ))}
    </div>

    <div className="flex justify-center py-8">
      <Link to="/propiedades">
        <Button>VER TODAS LAS PROPIEDADES</Button>
      </Link>
    </div>
  </div>
)

FeaturedProperties.propTypes = {
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
            fields {
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <FeaturedProperties
        data={data.allMarkdownRemark.nodes.map(property =>
          propertyMapper.mapApiToModel(property)
        )}
      />
    )}
  />
)
