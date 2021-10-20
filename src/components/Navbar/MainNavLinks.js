import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

import Overlay from "@/components/Overlay"

import NavLink from "./NavLink"

const SubMenu = ({ children }) => {
  return (
    <div className="flex flex-col bg-white shadow whitespace-nowrap">
      {children}
    </div>
  )
}

SubMenu.propTypes = {
  children: PropTypes.node,
}

const MainNavLinks = ({ hiddenMobile }) => {
  return (
    <div className={cx({ hidden: hiddenMobile }, "sm:flex")}>
      <Overlay>
        <NavLink to="/propiedades">Propiedades</NavLink>

        <Overlay.Content>
          <SubMenu>
            <NavLink type="submenu" to="/somewhere">
              Departamentos
            </NavLink>
            <NavLink type="submenu" to="/somewhere">
              Casas
            </NavLink>
            <NavLink type="submenu" to="/somewhere">
              Terrenos
            </NavLink>
            <NavLink type="submenu" to="/somewhere">
              Locales Comerciales
            </NavLink>
          </SubMenu>
        </Overlay.Content>
      </Overlay>

      <NavLink>Trabaja con nosotros</NavLink>

      <NavLink>Contacto</NavLink>
    </div>
  )
}

MainNavLinks.propTypes = {
  hiddenMobile: PropTypes.string,
}

export default MainNavLinks
