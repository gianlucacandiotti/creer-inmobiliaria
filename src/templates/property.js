import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { useEmblaCarousel } from "embla-carousel/react"

import { Property, propertyMapper } from "@/models/Property"
import Layout from "@/components/Layout"
import ImageSliderModal from "@/components/ImageSliderModal"

const PropertyPageTemplate = ({ data }) => {
  const [viewportRef] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
    loop: true,
    align: 0.1,
  })

  const [isImageSliderOpen, setIsImageSliderOpen] = React.useState(false)

  return (
    <Layout>
      <div className="h-px min-h-80 max-h-160 overflow-hidden xl:h-160 xl:max-h-full">
        <img
          src={data.images[0].image}
          alt="Property Thumbnail"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative">
        <div className="relative py-3">
          <div
            className="embla__viewport overflow-hidden w-full"
            ref={viewportRef}
          >
            <div className="flex select-none -ml-4">
              {data.images.map((image, i) => (
                <div
                  className="relative min-w-40/100 pl-4 sm:min-w-20/100 lg:min-w-16/100 xl:min-w-11/100"
                  key={i}
                >
                  <div className="relative overflow-hidden h-32">
                    <img
                      className="absolute block top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none transform -translate-y-1/2 -translate-x-1/2"
                      src={image.image}
                      onClick={() => setIsImageSliderOpen({ index: i })}
                      alt="Imagen de la propiedad"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isImageSliderOpen && (
        <ImageSliderModal
          images={data.images}
          startIndex={isImageSliderOpen.index}
          onClose={() => setIsImageSliderOpen(false)}
        />
      )}

      <p>Hello from {data.title}</p>
    </Layout>
  )
}

PropertyPageTemplate.propTypes = {
  data: PropTypes.instanceOf(Property),
}

const PropertyPage = ({ data }) => {
  return (
    <PropertyPageTemplate
      data={propertyMapper.mapApiToModel(data.markdownRemark)}
    />
  )
}

PropertyPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      id: PropTypes.string,
      frontmatter: PropTypes.object,
      fields: PropTypes.shape({
        slug: PropTypes.string,
      }),
    }),
  }),
}

export default PropertyPage

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
