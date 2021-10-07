import React from "react"
import PropTypes from "prop-types"
import mapboxgl from "mapbox-gl"

mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default

mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2lhbmx1Y2FjYW5kaW90dGkiLCJhIjoiY2tjZHN6aHY0MDFzZDJxbW84enYyMGtmcyJ9.xfW9FpxDMMvCHYV05XRuaQ"

const Map = ({ lng, lat }) => {
  const mapContainerEl = React.useRef(null)

  React.useEffect(() => {
    if (mapContainerEl) {
      const map = new mapboxgl.Map({
        container: mapContainerEl.current,
        style: "mapbox://styles/gianlucacandiotti/ckcdw6ycg0db21iqzykf02f5a",
        center: [lng, lat],
        zoom: 15,
      })

      map.addControl(new mapboxgl.NavigationControl())
      map.scrollZoom.disable()
      map.dragPan.disable()

      new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map)
    }
  }, [mapContainerEl])

  return <div ref={mapContainerEl} className="h-full" />
}

Map.propTypes = {
  lng: PropTypes.number,
  lat: PropTypes.number,
}

export default Map
