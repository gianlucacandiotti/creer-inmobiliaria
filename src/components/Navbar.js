import React from "react"
import { FaBars } from "@react-icons/all-files/fa/FaBars"
import { FaTimes } from "@react-icons/all-files/fa/FaTimes"
import cx from "classnames"
// import { Link } from "gatsby"

import logo from "@/img/logo.png"

const Navbar = () => {
  const [active, setActive] = React.useState(false)

  const toggleHamburger = () => {
    setActive(!active)
  }

  return (
    <header className="bg-gray-100 sm:flex sm:justify-between sm:px-4 sm:py-2">
      <div className="flex items-center justify-between px-4 py-2 sm:px-0 sm:p-0">
        <img src={logo} alt="Creer Inmobiliaria" className="h-20" />

        <button
          type="button"
          className="block text-gray-800 hover:text-pink-600 focus:text-pink-600 focus:outline-none sm:hidden"
          onClick={toggleHamburger}
        >
          {!active ? (
            <FaBars className="h-8 w-8 fill-current" />
          ) : (
            <FaTimes className="h-8 w-8 fill-current" />
          )}
        </button>
      </div>

      <div className={cx({ hidden: !active }, "sm:flex")}>
        <a className="block text-pink-600 font-semibold hover:bg-white p-4 sm:flex sm:items-center sm:p-2 sm:hover:bg-transparent sm:text-blue-900 sm:border-b-2 sm:border-transparent sm:hover:border-pink-600">
          Propiedades
        </a>
        <a className="block text-pink-600 font-semibold hover:bg-white p-4 sm:mt-0 sm:flex sm:items-center sm:p-2 sm:hover:bg-transparent sm:text-blue-900 sm:border-b-2 sm:border-transparent sm:hover:border-pink-600">
          Trabaja con nosotros
        </a>
        <a className="block text-pink-600 font-semibold hover:bg-white p-4 sm:mt-0 sm:flex sm:items-center sm:p-2 sm:hover:bg-transparent sm:text-blue-900 sm:border-b-2 sm:border-transparent sm:hover:border-pink-600">
          Contacto
        </a>
      </div>
    </header>
  )
}

export default Navbar
