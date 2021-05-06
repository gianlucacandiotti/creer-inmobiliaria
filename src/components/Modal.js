import React from "react"
import PropTypes from "prop-types"

const useModalOpen = () => {
  React.useEffect(() => {
    document.body.style.position = "fixed"
    document.body.style.top = `-${window.scrollY}px`

    return () => {
      const scrollY = document.body.style.top
      document.body.style.position = ""
      document.body.style.top = ""
      window.scrollTo(0, parseInt(scrollY || "0") * -1)
    }
  }, [])
}

const Modal = ({ children, controls = () => {} }) => {
  useModalOpen()

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative h-full w-full">
          {controls()}

          <div className="w-auto mx-auto h-full flex items-center">
            {children}
          </div>
        </div>
      </div>

      <div className="fixed inset-0 z-40 bg-black" />
    </>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  controls: PropTypes.func,
}

export default Modal
