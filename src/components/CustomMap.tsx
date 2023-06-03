import React, { useEffect } from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl';
import type { MapLayerMouseEvent } from 'react-map-gl';
import { MarkerDragEvent } from 'react-map-gl/dist/es5';
import { useActions } from '../Store/hooks/useActions';
import '../pages/mapPage/map.module.sass';
import useTypedSelector from '../Store/hooks/useTypedSelector';
import { BarEnum } from '../Store/App/appSlice';
import Pin from './Pin';

export interface MarkerType {
  longitude: number;
  latitude: number;
}

const CustomMap = () => {
  const { bar } = useTypedSelector((state) => state.app);
  const { data } = useTypedSelector((state) => state.address);
  const tasks = useTypedSelector((state) => state.tasks.data);
  const { fetchAddress, fetchTasks } = useActions();
  // const [popup, setPopup] = useState<GeocodeType>();
  useEffect(() => {
    fetchTasks();
  }, []);
  const handleMapClick = (e: MapLayerMouseEvent) => {
    switch (bar) {
      case BarEnum.NEW_TASK: {
        const longitude = e.lngLat.lng;
        const latitude = e.lngLat.lat;
        fetchAddress({
          longitude,
          latitude,
        });
        break;
      }
      case BarEnum.TASK_LIST: {
        break;
      }
      default: {
        break;
      }
    }
  };
  const handleMarkerDrag = (e: MarkerDragEvent) => {
    switch (bar) {
      case BarEnum.NEW_TASK: {
        const longitude = e.lngLat.lng;
        const latitude = e.lngLat.lat;
        fetchAddress({
          longitude,
          latitude,
        });
        break;
      }
      case BarEnum.TASK_LIST: {
        break;
      }
      default: {
        break;
      }
    }
  };
  return (
    <Map
      initialViewState={{
        longitude: 104.297_392_894_560_52,
        latitude: 52.276_000_802_924_47,
        zoom: 13,
      }}
      style={{
        width: '100%',
        height: '100vh',
      }}
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onClick={handleMapClick}
      doubleClickZoom={false}
      id="map"
      attributionControl={false}
    >
      <NavigationControl
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '60px',
          height: '25px',
        }}
        position="bottom-right"
        showCompass={false}
      />
      {data && (
        <Marker
          key={data.features[0].center[0] + data.features[0].center[1]}
          longitude={data.query[0]}
          latitude={data.query[1]}
          clickTolerance={20}
          draggable
          onDragEnd={handleMarkerDrag}
        />
      )}
      {tasks &&
        tasks.map((tasks) => (
          <Marker
            key={tasks.latitude + tasks.longitude}
            longitude={tasks.longitude}
            latitude={tasks.latitude}
          >
            <div
              style={{
                height: 31,
                position: 'absolute',
                zIndex: 3,
                top: '1%',
                background: '#9CFFB8',
                transform: 'translateX(-50%)',
                left: '50%',
                padding: '4px',
                boxSizing: 'border-box',
                borderRadius: '5px',
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  whiteSpace: 'nowrap',
                }}
              >
                {tasks.title}
              </span>
            </div>
            <Pin />
          </Marker>
        ))}
      {/*{popup && data && (*/}
      {/*  <Popup*/}
      {/*    longitude={data.features[0].geometry.coordinates[0]}*/}
      {/*    latitude={data.features[0].geometry.coordinates[1]}*/}
      {/*    anchor="top"*/}
      {/*  >*/}
      {/*    <div>*/}
      {/*      PIDORAS:*/}
      {/*      {data.features[0].address}*/}
      {/*    </div>*/}
      {/*  </Popup>*/}
      {/*)}*/}
    </Map>
  );
};

export default CustomMap;
