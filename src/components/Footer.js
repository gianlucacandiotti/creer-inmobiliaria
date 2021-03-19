import React from "react"
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF"

import logo from "@/img/logo.png"
import IconLink from "@/components/IconLink"

const Footer = () => (
  <footer className="bg-gray-100">
    <div className="container py-4 sm:grid sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
      <div className="mb-6">
        <img src={logo} alt="Creer Inmobiliaria" className="h-20" />

        <p className="uppercase text-xs text-gray-700 mt-4">
          Un servicio profesional respaldado por la innovación tecnológica.
        </p>
      </div>

      <div className="text-gray-700 text-base mb-6 flex flex-col">
        <span>Jr. Albacete 215, La Molina</span>

        <span>hola@creerinmobiliaria.com</span>
      </div>

      <div className="text-gray-700 text-base mb-6">
        <ul>
          <li>Propiedades</li>
        </ul>
      </div>

      <div className="2">
        <IconLink title="facebook" href="https://facebook.com">
          <FaFacebookF />
        </IconLink>
      </div>
    </div>
  </footer>
)

export default Footer
