import React from 'react';
import logo from '../../../assets/logo.svg';
import { useTypedSelector } from '../../../Store/hooks/useTypedSelector';

function NewTaskMenu() {
  const { data } = useTypedSelector((state) => state.address);

  return (
    <div className="taskbar">
      <img src={logo} alt="Logo" />
      <h1>Создание метки</h1>
      {typeof data !== 'undefined' ? (
        <h2>
          {data && data}
          ,
          {data && data}
        </h2>
      ) : (
        <h2>Поставьте маркер на карту</h2>
      )}
    </div>
  );
}

export default NewTaskMenu;
