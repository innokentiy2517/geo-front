import React from 'react';
import logo from '../../../../assets/logo.svg';
import { useTypedSelector } from '../../../../Store/hooks/useTypedSelector';
import s from './NewTaskMenu.module.sass';
import { getAddress } from './utils';

function NewTaskMenu() {
  const { data } = useTypedSelector((state) => state.address);
  const address: string = getAddress(data);
  return (
    <div className="taskbar newTaskMenu">
      <img src={logo} alt="Logo" />
      <h1>Создание метки</h1>
      <h2>{address}</h2>
      <input placeholder="Название" />
      <input placeholder="Описание" className={s.newTaskMenu__desc} />
    </div>
  );
}

export default NewTaskMenu;
