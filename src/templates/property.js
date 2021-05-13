import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { useEmblaCarousel } from "embla-carousel/react"
import { MdZoomOutMap } from "@react-icons/all-files/md/MdZoomOutMap"
import { FaRegBuilding } from "@react-icons/all-files/fa/FaRegBuilding"

import { formatPrice, transformCurrencyToSymbol } from "@/utils/string-utils"
import { Property, propertyMapper } from "@/models/Property"
import Layout from "@/components/Layout"
import ImageSliderModal from "@/components/ImageSliderModal"

const PropertyMainInfo = ({ data }) => {
  const { location, price, currency, areaTotal } = data

  return (
    <div className="p-8 bg-gray-100 h-full">
      <h1 className="font-varela-round font-bold text-blue-800 text-4xl mb-2">
        {location.streetAddress} {location.specifier}
        <br />
        {location.district}, {location.city}
      </h1>

      <p className="text-gray-700 text-xl mb-16">
        6 rooms, kitchen, bathroom, sauna, 2 separate toilets, balcony, roof
        terrace, storage room
      </p>

      <p className="font-varela-round font-bold text-blue-800 text-4xl mb-2">
        {transformCurrencyToSymbol(currency)}
        {formatPrice(price)}
      </p>

      <p className="text-gray-700 text-xl mb-16">
        {areaTotal}.00 m² ({formatPrice(Math.floor(price / areaTotal))} / m²)
      </p>

      <div className="grid grid-cols-2 gap-6">
        <div className="flex items-center">
          <FaRegBuilding className="h-12 w-12 text-blue-800" />

          <div className="text-l">
            <p>Tipo de vivienda</p>
            <p className="font-bold">Departamento</p>
          </div>
        </div>

        <div className="flex items-center">
          <FaRegBuilding className="h-12 w-12 text-blue-800" />

          <div className="text-l">
            <p>Tipo de vivienda</p>
            <p className="font-bold">Departamento</p>
          </div>
        </div>

        <div className="flex items-center">
          <FaRegBuilding className="h-12 w-12 text-blue-800" />

          <div className="text-l">
            <p>Tipo de vivienda</p>
            <p className="font-bold">Departamento</p>
          </div>
        </div>

        <div className="flex items-center">
          <FaRegBuilding className="h-12 w-12 text-blue-800" />

          <div className="text-l">
            <p>Tipo de vivienda</p>
            <p className="font-bold">Departamento</p>
          </div>
        </div>
      </div>
    </div>
  )
}

PropertyMainInfo.propTypes = {
  data: PropTypes.instanceOf(Property),
}

const PropertyPageTemplate = ({ data }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
    loop: true,
    align: 0.075,
  })

  const [isImageSliderOpen, setIsImageSliderOpen] = React.useState(false)

  const handleThumbnailClick = index => {
    if (embla.clickAllowed()) {
      setIsImageSliderOpen({ index })
    }
  }

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-5">
        <div className="h-px min-h-80 max-h-160 overflow-hidden xl:h-160 xl:max-h-full col-span-7">
          <img
            src={data.images[0].image}
            alt="Property Thumbnail"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="col-span-5">
          <PropertyMainInfo data={data} />
        </div>
      </div>

      <div className="relative">
        <div className="relative py-4">
          <div
            className="embla__viewport overflow-hidden w-full"
            ref={viewportRef}
          >
            <div className="flex select-none -ml-4 xl:-ml-5">
              {data.images.map((image, i) => (
                <button
                  key={i}
                  className="relative pl-4 min-w-42/100 sm:min-w-21/100 lg:min-w-17/100 xl:min-w-12/100 xl:pl-5"
                  onClick={() => handleThumbnailClick(i)}
                >
                  <div className="relative overflow-hidden h-28 sm:h-32">
                    <img
                      className="absolute block top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none max-h-44 transform -translate-y-1/2 -translate-x-1/2"
                      src={image.image}
                      alt="Imagen de la propiedad"
                    />

                    <div className="group absolute top-0 bottom-0 w-full flex items-center justify-center p-4 bg-transparent transition duration-200 ease-in-out hover:bg-blue-800 hover:bg-opacity-75">
                      <MdZoomOutMap className="h-6 w-6 text-white opacity-0 duration-200 ease-in-out group-hover:opacity-100" />
                    </div>
                  </div>
                </button>
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
