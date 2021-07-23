import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import { Property, propertyMapper } from "@/models/Property"
import Layout from "@/components/Layout"
import ImageCarousel from "@/components/ImageCarousel"
import ImageSliderModal from "@/components/ImageSliderModal"
import PropertyDescription from "@/components/PropertyDescription"
import Button from "@/components/Button"
import Map from "@/components/Map"
import PropertyMainInfo from "@/components/PropertyMainInfo"
import PropertyDetailedInfo from "@/components/PropertyDetailedInfo"

const PropertyPageTemplate = ({ data }) => {
  const [isImageSliderOpen, setIsImageSliderOpen] = React.useState(false)

  const handleThumbnailClick = index => {
    setIsImageSliderOpen({ index })
  }

  const [lng, lat] = JSON.parse(data.location.geojson).coordinates

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-full min-h-80 overflow-hidden lg:col-span-7 lg:h-140 lg:max-h-full">
          <img
            src={data.images[0].image}
            alt="Property Thumbnail"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="hidden lg:block lg:col-span-5">
          <PropertyMainInfo data={data} />
        </div>
      </div>

      <ImageCarousel
        images={data.images}
        onThumbnailClick={handleThumbnailClick}
      />

      {isImageSliderOpen && (
        <ImageSliderModal
          images={data.images}
          startIndex={isImageSliderOpen.index}
          onClose={() => setIsImageSliderOpen(false)}
        />
      )}

      <div className="lg:hidden">
        <PropertyMainInfo data={data} />
      </div>

      <div className="container mt-8 md:flex md:items-start justify-between">
        <PropertyDescription
          title={data.title}
          description={data.description}
        />

        <div className="mt-8 tracking-widest bg-blue-50 border-t-2 border-blue-200 p-8 text-center md:mt-0 md:flex-shrink-0 md:ml-8 md:pt-14 md:pb-14">
          <p className="mb-4 font-semibold text-blue-700">
            RESERVA UN RECORRIDO
          </p>

          <Button cta>AGENDA UNA VISITA</Button>
        </div>
      </div>

      <div className="container mt-8 h-96">
        <Map lng={lng} lat={lat} />
      </div>

      <div className="container mt-8 mb-8">
        <PropertyDetailedInfo
          title="Carácterísticas generales"
          columns={[
            [
              {
                title: "Precio",
                value: data.price,
              },
              {
                title: "Mantenimiento",
                value: data.price,
              },
              {
                title: "Area total",
                value: data.areaTotal,
              },
            ],
            [
              {
                title: "Precio",
                value: data.price,
              },
              {
                title: "Mantenimiento",
                value: data.price,
              },
              {
                title: "Area total",
                value: data.areaTotal,
              },
            ],
          ]}
        />
      </div>
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
        location_map
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
