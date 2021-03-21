import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

const Property = ({ data }) => {
  const { markdownRemark } = data

  console.log("markdownRemark: ", markdownRemark)

  return <Layout>Hello from property</Layout>
}

Property.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Property

export const pageQuery = graphql`
  query PropertyByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
      }
    }
  }
`
