import React from 'react';
import CustomMap from './components/CustomMap';
import NewTaskMenu from './components/NewTaskMenu';
import s from './map.module.sass';

function MapPage() {
  return (
    <div className={s.mapPageWrapper}>
      <NewTaskMenu />
      <CustomMap />
    </div>
  );
}

export default MapPage;
