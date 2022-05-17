import React, {useState} from 'react';
import Map, {MapLayerMouseEvent, Marker, useMap} from "react-map-gl";

const token = 'pk.eyJ1IjoiaW5ub2tlbnRpeTI1MTciLCJhIjoiY2wwdHRicHd2MHAxZjNibm1odTdwNXk1cCJ9.aibsBxys2tKJkN25qkCAKg';

interface IMarker {
    longitude: number,
    latitude: number
}

const CustomMap = () => {
    const [markers, setMarkers] = useState<IMarker[]>([])
    const {map} = useMap();
    const onClick = (e: MapLayerMouseEvent) => {
        const longitude = e.lngLat.lng
        const latitude = e.lngLat.lat
        setMarkers(markers => [...markers, {longitude, latitude}])
    };
    return (
        <Map
            initialViewState={{longitude: 104.29739289456052, latitude: 52.27600080292447, zoom: 13}}
            style={{width: '100%', height: '100vh'}}
            mapboxAccessToken={token}
            mapStyle={'mapbox://styles/mapbox/streets-v11'}
            onDblClick={onClick}
            doubleClickZoom={false}
            id='map'
        >
            {markers.length > 0 ? markers.map((marker, id) => {
                return (
                    <Marker onClick={e => {
                        e.target.remove()
                    }}
                            key={id}
                            longitude={marker.longitude}
                            latitude={marker.latitude}
                            clickTolerance={20}
                    />
                )
            }) : <></>}
        </Map>
    );
};

export default CustomMap;