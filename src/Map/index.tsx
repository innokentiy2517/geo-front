import L, {LatLngTuple} from "leaflet";
import {MapContainer, useMap, useMapEvents} from "react-leaflet";
import React from "react";
import Layers from "./Layers";
import {nominatim} from "leaflet-control-geocoder/dist/geocoders";
import L from "react-leaflet"

const mapData = {
    center: [52.27560464492827, 104.29685611644149],
    zoom: 13
}

const Map = () => {
    const map = useMap()
    const geocoder = L.Control.Geocoder.nominatim()
    let marker: L.Marker<any>

    const mapEvents = useMapEvents({
        click: event => {
            geocoder.reverse(event.latlng, map.getZoom(), result => {
                let r = result[0]
                if (r){
                    if (marker){
                        marker.
                            setLatLng(r.center).
                            setPopupContent(r.html || r.name).
                            openPopup()
                    } else {
                        marker = L.marker(r.center).bindPopup(r.name).addTo(map).openPopup()
                    }
                }
            })
        }
    })

    return(
        <>
            <MapContainer className="map-container" zoom={mapData.zoom} center={mapData.center as LatLngTuple}>
                <Layers/>
            </MapContainer>
        </>
    )
}

export default Map