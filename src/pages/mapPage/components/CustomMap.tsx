import React, { useState } from 'react';
import Map, { MapLayerMouseEvent, Marker, useMap } from 'react-map-gl';
import { useActions } from '../../../Store/hooks/useActions';

const token = 'pk.eyJ1IjoiaW5ub2tlbnRpeTI1MTciLCJhIjoiY2wwdHRicHd2MHAxZjNibm1odTdwNXk1cCJ9.aibsBxys2tKJkN25qkCAKg';

export interface MarkerType {
  longitude: number;
  latitude: number;
}

function CustomMap() {
  const { addMarker, deleteMarker } = useActions();
  const [markers, setMarkers] = useState<MarkerType[]>([]);
  const { map } = useMap();
  const onClick = (e: MapLayerMouseEvent) => {
    const longitude = e.lngLat.lng;
    const latitude = e.lngLat.lat;
    console.log(e.lngLat);
    addMarker({ longitude, latitude });
    setMarkers((markers) => [...markers, { longitude, latitude }]);
  };
  return (
    <Map
      initialViewState={{
        longitude: 104.29739289456052,
        latitude: 52.27600080292447,
        zoom: 13,
      }}
      style={{ width: '100%', height: '100vh' }}
      mapboxAccessToken={token}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onDblClick={onClick}
      doubleClickZoom={false}
      id="map"
    >
      {markers && (
        markers.map((marker, idx) => (
          <Marker
            onClick={(e) => {
              e.target.remove();
              deleteMarker();
            }}
            key={idx}
            longitude={marker.longitude}
            latitude={marker.latitude}
            clickTolerance={20}
          />
        ))
      )}
    </Map>
  );
}

export default CustomMap;
