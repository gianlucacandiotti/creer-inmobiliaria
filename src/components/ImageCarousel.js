import React from "react"
import PropTypes from "prop-types"
import { useEmblaCarousel } from "embla-carousel/react"
import { MdZoomOutMap } from "react-icons-all-files/md/MdZoomOutMap"

const ImageCarousel = ({ images, onThumbnailClick }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
    loop: true,
    align: 0.075,
  })

  const handleButtonClick = index => {
    if (embla.clickAllowed()) {
      onThumbnailClick(index)
    }
  }

  return (
    <div className="relative">
      <div className="relative py-4">
        <div
          className="embla__viewport overflow-x-hidden w-full"
          ref={viewportRef}
        >
          <div className="flex select-none -ml-4 xl:-ml-5">
            {images.map((image, i) => (
              <div
                key={i}
                className="relative pl-4 min-w-42/100 sm:min-w-21/100 lg:min-w-17/100 xl:min-w-12/100 xl:pl-5"
              >
                <button
                  className="block relative overflow-hidden w-full h-28 focus:outline-black sm:h-32 "
                  onClick={() => handleButtonClick(i)}
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
  )
}

ImageCarousel.propTypes = {
  images: PropTypes.array,
  onThumbnailClick: PropTypes.func,
}

export default ImageCarousel
