import React from "react"
import { FaBars } from "react-icons-all-files/fa/FaBars"
import { FaTimes } from "react-icons-all-files/fa/FaTimes"
import { Link } from "gatsby"

import logo from "@/img/logo.png"

import MainNavLinks from "./MainNavLinks"

const Navbar = () => {
  const [active, setActive] = React.useState(false)

  const toggleHamburger = () => {
    setActive(!active)
  }

  return (
    <header className="bg-white">
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

        <MainNavLinks hidden={!active} />
      </div>
    </header>
  )
}

export default Navbar
