import React, {Ref} from 'react';
import {MapContainer, TileLayer, useMapEvents} from 'react-leaflet';
import './App.css';
import {LatLngTuple} from "leaflet";
import Map from "./Map";

function App() {
    return (
        <Map/>
    );
}

export default App;
