import React from 'react';
import logo from '../../../assets/logo.svg';
import { useTypedSelector } from '../../../Store/hooks/useTypedSelector';

function NewTaskMenu() {
  const { data } = useTypedSelector((state) => state.marker);

  return (
    <div className="taskbar">
      <img src={logo} alt="Logo" />
      <h1>Создание метки</h1>
      <h2>
        {data && data.latitude}
        ,
        {data && data.longitude}
      </h2>
    </div>
  );
}

export default NewTaskMenu;
