import PropTypes from "prop-types"

export const PropertyProps = PropTypes.shape({
  title: PropTypes.string,
  locationStreetAddress: PropTypes.string,
  locationSpecifier: PropTypes.string,
  currency: PropTypes.string,
  price: PropTypes.number,
  locationDistrict: PropTypes.string,
  locationCity: PropTypes.string,
  areaTotal: PropTypes.number,
})
