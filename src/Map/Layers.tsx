import {MapContainer, TileLayer, useMap, useMapEvents} from "react-leaflet";
import React from "react";
import {geocoders} from "leaflet-control-geocoder";
import * as L from "leaflet";

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const Layers = () => {
    // const map = useMapEvents({
    //     click: ()=>{
    //         console.log('123')
    //     }
    // })

    React.useEffect(() => {
        const L = require("leaflet");

        delete L.Icon.Default.prototype._getIconUrl;

        L.Icon.Default.mergeOptions({
            iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
            iconUrl: require("leaflet/dist/images/marker-icon.png"),
            shadowUrl: require("leaflet/dist/images/marker-shadow.png")
        });
    }, []);

    const geocoder = geocoders.nominatim()
    let marker: L.Marker

    const mapEvents = useMapEvents({
        click: event => {
            geocoder.reverse(event.latlng, mapEvents.getZoom(), result => {
                let r = result[0]
                if (r) {
                    if (marker) {
                        marker.setLatLng(r.center).setPopupContent(r.html || r.name).openPopup()
                    } else {
                        marker = L.marker(r.center).bindPopup(r.name).addTo(mapEvents).openPopup()
                    }
                }
            })

            // geocoder.geocode("Россия, Иркутск,Солнечный-1 , Звёздная, 10",
            //         result => {
            //         let r = result[0]
            //         if (r) {
            //             if (marker) {
            //                 marker.setLatLng(r.center).setPopupContent(r.html || r.name).openPopup()
            //                 console.log(r.html)
            //             } else {
            //                 marker = L.marker(r.center).bindPopup(r.name).addTo(mapEvents).openPopup()
            //             }
            //         }})
        }
    })

    return(
        <TileLayer accessToken={"pk.eyJ1IjoiaW5ub2tlbnRpeTI1MTciLCJhIjoiY2wwdHRicHd2MHAxZjNibm1odTdwNXk1cCJ9.aibsBxys2tKJkN25qkCAKg"} tileSize={256} attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'/>
    )
}

export default Layers