import {MapContainer, TileLayer, useMap, useMapEvents} from "react-leaflet";
import React from "react";

const Layers = () => {
    // const map = useMapEvents({
    //     click: ()=>{
    //         console.log('123')
    //     }
    // })

    return(
        <TileLayer accessToken={"pk.eyJ1IjoiaW5ub2tlbnRpeTI1MTciLCJhIjoiY2wwdHRicHd2MHAxZjNibm1odTdwNXk1cCJ9.aibsBxys2tKJkN25qkCAKg"} tileSize={256} attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'/>
    )
}

export default Layers