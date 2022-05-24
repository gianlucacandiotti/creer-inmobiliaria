import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

import Overlay from "@/components/Overlay/Overlay"

import NavLink from "./NavLink"

const SubMenu = ({ children, isDesktop }) => {
  return (
    <div
      className={cx("flex flex-col bg-white whitespace-nowrap", {
        shadow: isDesktop,
      })}
    >
      {children}
    </div>
  )
}

SubMenu.propTypes = {
  children: PropTypes.node,
  isDesktop: PropTypes.bool,
}

const MenuItemWithSubMenu = ({ title, to, subMenuItems }) => {
  return (
    <>
      <div className="sm:hidden">
        <NavLink to={to}>{title}</NavLink>

        <SubMenu>
          {subMenuItems.map(item => (
            <NavLink key={item.title} type="submenu" to={item.to}>
              {item.title}
            </NavLink>
          ))}
        </SubMenu>

        <NavLink>Trabaja con nosotros</NavLink>

        <NavLink>Contacto</NavLink>
      </div>

      <Overlay className="hidden sm:block">
        <NavLink to={to}>{title}</NavLink>

        <Overlay.Content>
          <SubMenu isDesktop>
            {subMenuItems.map(item => (
              <NavLink key={item.title} type="submenu" to={item.to}>
                {item.title}
              </NavLink>
            ))}
          </SubMenu>
        </Overlay.Content>
      </Overlay>
    </>
  )
}

MenuItemWithSubMenu.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  subMenuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      to: PropTypes.string,
    })
  ),
}

const MainNavLinks = ({ hidden }) => {
  const forSaleSubMenuItems = [
    {
      title: "Departamentos",
      to: "/propiedades?property_type=apartment",
    },
    {
      title: "Casas",
      to: "/propiedades?property_type=house",
    },
    {
      title: "Terrenos",
      to: "/propiedades?property_type=lot",
    },
    {
      title: "Locales Comerciales",
      to: "/propiedades?property_type=commercial",
    },
  ]

  return (
    <div className={cx({ hidden }, "sm:flex")}>
      <MenuItemWithSubMenu
        title="Propiedades"
        to="/propiedades"
        subMenuItems={forSaleSubMenuItems}
      />

      <NavLink>Trabaja con nosotros</NavLink>

      <NavLink>Contacto</NavLink>
    </div>
  )
}

MainNavLinks.propTypes = {
  hidden: PropTypes.bool,
}

export default MainNavLinks
