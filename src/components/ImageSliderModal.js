import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import { useEmblaCarousel } from "embla-carousel/react"
import { FaTimes } from "@react-icons/all-files/fa/FaTimes"
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft"
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight"

import Modal from "@/components/Modal"

const ImageSliderModal = ({ images = [], startIndex, onClose }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    containScroll: "trimSnaps",
    loop: true,
    inViewThreshold: 0.1,
    startIndex,
  })

  const [isScrollPrevEnabled, setIsScrollPrevEnabled] = React.useState(false)
  const [isScrollNextEnabled, setIsScrollNextEnabled] = React.useState(false)
  const [currentSlide, setCurrentSlide] = React.useState(null)

  const scrollPrev = React.useCallback(() => embla?.scrollPrev(), [embla])
  const scrollNext = React.useCallback(() => embla?.scrollNext(), [embla])

  const onSelect = React.useCallback(() => {
    if (!embla) return

    setIsScrollPrevEnabled(embla.canScrollPrev())
    setIsScrollNextEnabled(embla.canScrollNext())
    setCurrentSlide(embla.selectedScrollSnap() + 1)
  }, [embla])

  React.useEffect(() => {
    return () => {
      embla?.destroy()
    }
  }, [])

  React.useEffect(() => {
    const handleKeyUp = event => {
      switch (event.key) {
        case "Left": // IE/Edge specific value
        case "ArrowLeft":
          if (isScrollPrevEnabled) {
            scrollPrev()
          }

          break

        case "Right": // IE/Edge specific value
        case "ArrowRight":
          if (isScrollNextEnabled) {
            scrollNext()
          }

          break

        case "Esc": // IE/Edge specific value
        case "Escape":
          if (onClose) {
            onClose()
          }

          break

        default:
          return
      }
    }

    document.addEventListener("keyup", handleKeyUp)
    return () => {
      document.removeEventListener("keyup", handleKeyUp)
    }
  }, [
    isScrollPrevEnabled,
    scrollPrev,
    isScrollNextEnabled,
    scrollNext,
    onClose,
  ])

  React.useEffect(() => {
    if (!embla) return

    embla.on("select", onSelect)

    onSelect()
  }, [embla, onSelect])

  return (
    <Modal>
      <div className="relative w-full h-full flex items-center md:px-12">
        <div
          className="embla__viewport overflow-hidden w-full"
          ref={viewportRef}
        >
          <div className="flex select-none -ml-12">
            {images.map((image, i) => (
              <div
                className="flex items-center justify-center relative min-w-full pl-12"
                key={i}
              >
                <div className="relative overflow-hidden">
                  <img
                    className={cx({ hidden: !embla }, "max-h-90vh")}
                    src={image.image}
                    alt="Imagen de la propiedad"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={cx(
            { hidden: currentSlide === null },
            "text-lg leading-none text-white absolute top-3 left-3"
          )}
        >
          {currentSlide} / {embla?.slideNodes().length}
        </div>

        <FaTimes
          className="h-6 w-6 text-white cursor-pointer absolute top-3 right-3"
          onClick={onClose}
        />

        <button
          className="absolute top-1/2 -translate-y-1/2 left-2 bg-black rounded-full opacity-50 p-1"
          onClick={scrollPrev}
          disabled={!isScrollPrevEnabled}
        >
          <FaChevronLeft className="h-6 w-6 text-white cursor-pointer" />
        </button>

        <button
          className="absolute top-1/2 -translate-y-1/2 right-2 bg-black rounded-full opacity-50 p-1"
          onClick={scrollNext}
          disabled={!isScrollNextEnabled}
        >
          <FaChevronRight className="h-6 w-6 text-white cursor-pointer" />
        </button>
      </div>
    </Modal>
  )
}

ImageSliderModal.propTypes = {
  images: PropTypes.array,
  startIndex: PropTypes.number,
  onClose: PropTypes.func,
}

export default ImageSliderModal
