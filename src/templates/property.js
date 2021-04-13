import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import { Property as PropertyModel } from "@/models/Property"

import Layout from "../components/Layout"

const Property = ({ data }) => {
  const { markdownRemark } = data

  console.log("markdownRemark: ", markdownRemark)

  return <Layout>Hello from property</Layout>
}

Property.propTypes = {
  data: PropTypes.instanceOf(PropertyModel),
}

export default Property

export const pageQuery = graphql`
  query PropertyByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
`
