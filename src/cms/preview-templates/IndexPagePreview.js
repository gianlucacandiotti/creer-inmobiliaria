import React from "react"
import PropTypes from "prop-types"

import { IndexPageTemplate } from "../../templates/index-page"

export const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <IndexPageTemplate
      image={getAsset(data.image)}
      title={data.title}
      heading={data.heading}
      subheading={data.subheading}
      description={data.description}
      intro={data.intro || { blurbs: [] }}
      mainpitch={data.mainpitch || {}}
    />
  )
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}
