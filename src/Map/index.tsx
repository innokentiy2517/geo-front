import * as L from "leaflet";
import {LatLngTuple} from "leaflet";
import {MapContainer, useMap, useMapEvents} from "react-leaflet";
import React from "react";
import Layers from "./Layers";
import {geocoders} from "leaflet-control-geocoder"

const mapData = {
    center: [52.27560464492827, 104.29685611644149],
    zoom: 13
}

const Map = () => {
    // const map = useMap()


    return (
        <>
            <MapContainer className="map-container" inertia={true} zoom={mapData.zoom} center={mapData.center as LatLngTuple}>
                <Layers/>
            </MapContainer>
        </>
    )
}

export default Map