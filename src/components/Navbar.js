import React from "react"
import { FaBars } from "@react-icons/all-files/fa/FaBars"
import { FaTimes } from "@react-icons/all-files/fa/FaTimes"
import cx from "classnames"
import { Link } from "gatsby"

import logo from "@/img/logo.png"

const Navbar = () => {
  const [active, setActive] = React.useState(false)

  const toggleHamburger = () => {
    setActive(!active)
  }

  return (
    <header className="bg-gray-100">
      <div className="container sm:flex sm:justify-between sm:py-2">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <Link to="/">
            <img src={logo} alt="Creer Inmobiliaria" className="h-20" />
          </Link>

          <button
            type="button"
            className="block text-gray-800 hover:text-pink-600 focus:text-pink-600 focus:outline-none focus:ring sm:hidden"
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
          <Link
            className="block text-pink-600 font-semibold hover:bg-white p-4 sm:flex sm:items-center sm:p-2 sm:hover:bg-transparent sm:text-blue-900 sm:border-b-2 sm:border-transparent sm:hover:border-pink-600"
            to="/propiedades"
          >
            Propiedades
          </Link>

          <a className="block text-pink-600 font-semibold hover:bg-white p-4 sm:mt-0 sm:flex sm:items-center sm:p-2 sm:hover:bg-transparent sm:text-blue-900 sm:border-b-2 sm:border-transparent sm:hover:border-pink-600">
            Trabaja con nosotros
          </a>

          <a className="block text-pink-600 font-semibold hover:bg-white p-4 sm:mt-0 sm:flex sm:items-center sm:p-2 sm:hover:bg-transparent sm:text-blue-900 sm:border-b-2 sm:border-transparent sm:hover:border-pink-600">
            Contacto
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
