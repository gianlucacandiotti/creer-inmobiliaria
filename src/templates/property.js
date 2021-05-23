import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { useEmblaCarousel } from "embla-carousel/react"
import { MdZoomOutMap } from "@react-icons/all-files/md/MdZoomOutMap"
import { BsBuilding } from "@react-icons/all-files/bs/BsBuilding"

import { formatPrice, transformCurrencyToSymbol } from "@/utils/string-utils"
import { Property, propertyMapper } from "@/models/Property"
import Layout from "@/components/Layout"
import ImageSliderModal from "@/components/ImageSliderModal"

const PropertyMainInfo = ({ data }) => {
  const { location, price, currency, areaTotal } = data

  return (
    <div className="p-8 bg-gray-100 h-full">
      <h1 className="font-varela-round font-bold text-blue-800 text-3xl mb-2">
        {location.streetAddress} {location.specifier}
        <br />
        {location.district}, {location.city}
      </h1>

      <p className="text-gray-700 text-lg mb-12">
        6 rooms, kitchen, bathroom, sauna, 2 separate toilets, balcony, roof
        terrace, storage room
      </p>

      <p className="font-varela-round font-bold text-blue-800 text-3xl mb-2">
        {transformCurrencyToSymbol(currency)}
        {formatPrice(price)}
      </p>

      <p className="text-gray-700 text-lg mb-12">
        {areaTotal}.00 m² ({formatPrice(Math.floor(price / areaTotal))} / m²)
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex items-center space-x-2">
          <BsBuilding className="h-9 w-9 text-blue-800 flex-shrink-0" />

          <div>
            <p className="text-sm">Tipo de vivienda</p>

            <p className="font-bold">Departamento</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <BsBuilding className="h-9 w-9 text-blue-800 flex-shrink-0" />

          <div>
            <p className="text-sm">Tipo de vivienda</p>

            <p className="font-bold">Departamento</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <BsBuilding className="h-9 w-9 text-blue-800 flex-shrink-0" />

          <div>
            <p className="text-sm">Tipo de vivienda</p>

            <p className="font-bold">Departamento</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <BsBuilding className="h-9 w-9 text-blue-800 flex-shrink-0" />

          <div>
            <p className="text-sm">Tipo de vivienda</p>

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

      <div className="relative">
        <div className="relative py-4">
          <div
            className="embla__viewport overflow-x-hidden w-full"
            ref={viewportRef}
          >
            <div className="flex select-none -ml-4 xl:-ml-5">
              {data.images.map((image, i) => (
                <div
                  key={i}
                  className="relative pl-4 min-w-42/100 sm:min-w-21/100 lg:min-w-17/100 xl:min-w-12/100 xl:pl-5"
                >
                  <button
                    className="block relative overflow-hidden w-full h-28 focus:outline-black sm:h-32 "
                    onClick={() => handleThumbnailClick(i)}
                  >
                    <img
                      className="absolute block top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none max-h-44 transform -translate-y-1/2 -translate-x-1/2"
                      src={image.image}
                      alt="Imagen de la propiedad"
                    />

                    <div className="group absolute top-0 bottom-0 w-full flex items-center justify-center p-4 bg-transparent transition duration-200 ease-in-out hover:bg-blue-800 hover:bg-opacity-75">
                      <MdZoomOutMap className="h-6 w-6 text-white opacity-0 duration-200 ease-in-out group-hover:opacity-100" />
                    </div>
                  </button>
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

      <div className="lg:hidden">
        <PropertyMainInfo data={data} />
      </div>

      <div className="container mt-8">
        <h4 className="text-2xl font-semibold mb-4 text-blue-800">
          A triangle completed in 2002 with a magnificent sea view in
          Aurinkolahti from a valuable property
        </h4>

        <p className="text-lg leading-8 whitespace-pre-line text-gray-800">
          {data.description}
        </p>
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
