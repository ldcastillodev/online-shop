import { useEffect, useRef, useState } from 'react'
import { mapStyles } from '../styles'
import { ZoomButtons } from './zoom'

export interface MapProps {
  position?: google.maps.LatLngLiteral
  address?: string
  /** By default, this component puts a marker for the initial position/address set to the component at mount */
  skipMarker?: boolean
  zoom?: number
  markers?: google.maps.MarkerOptions[]
}

export const Map = ({ markers, zoom = 15, position, address, skipMarker = false }: MapProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [map, setMap] = useState<google.maps.Map>()

  useEffect(() => {
    const loader = async () => {
      let center
      if (address) {
        const geocoder = new window.google.maps.Geocoder()
        const { results } = await geocoder.geocode({ address })
        center = results[0]?.geometry.location
      } else {
        center = position
      }

      if (ref?.current) {
        const map = new window.google.maps.Map(ref.current, {
          zoom,
          center,
          styles: mapStyles,
          minZoom: 11,
          disableDefaultUI: true,
        })

        setMap(map)

        const createMarker = (options: google.maps.MarkerOptions) =>
          new google.maps.Marker({
            ...options,
            icon: '/map-marker.svg',
            map,
          })

        if (!skipMarker) createMarker({ position: center })

        // Requirements list for a mostly static component, with markers loaded at mount time (hence no deps on this effect)
        // if we want to add/remove markers dynamically, this would need to be added separately
        // (and also checking if it's already there, since gmaps will just add the same marker on top and call it a day)
        markers?.forEach((marker) => createMarker(marker))
      }
    }
    loader()
  }, [])

  const adjustZoomBy = (value: number) => () => map?.set('zoom', map.get('zoom') + value)

  return (
    <div className="relative w-full h-full">
      <div ref={ref} className="w-full h-full rounded-4" />
      <ZoomButtons onZoomIn={adjustZoomBy(1)} onZoomOut={adjustZoomBy(-1)} />
    </div>
  )
}
