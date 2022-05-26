import ru from 'date-fns/locale/ru';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import TimeField from 'react-simple-timefield';
import ReactSwitch from 'react-switch';
import logo from '../../../../assets/logo.svg';
import { useTypedSelector } from '../../../../Store/hooks/useTypedSelector';
import s from './NewTaskMenu.module.sass';
import { getAddress } from './utils';

function NewTaskMenu() {
  const { data } = useTypedSelector((state) => state.address);
  const [checked, setChecked] = useState<boolean>(false);
  const address: string = getAddress(data);
  return (
    <div className="taskbar newTaskMenu">
      <img src={logo} alt="Logo" />
      <h1>Создание метки</h1>
      <h2>{address}</h2>
      <input placeholder="Название" />
      <input placeholder="Описание" className={s.newTaskMenu__desc} />
      <div className={s.newTaskMenu__switchWrapper}>
        <p>
          Временная
          {' '}
          <span>(удалится после выполнения)</span>
        </p>
        <ReactSwitch
          checked={checked}
          onChange={setChecked}
          width={22}
          height={14}
          handleDiameter={6}
          uncheckedIcon={false}
          checkedIcon={false}
        />
      </div>
      {checked
        ? (
          <DayPicker
            mode="single"
            weekStartsOn={1}
            locale={ru}
            styles={{
              months: { width: '100%' },
              caption: { width: '100%' },
              root: {
                width: '100%',
                margin: '0',
                marginBottom: '24px',
              },
              month: { width: '100%' },
              table: {
                width: '100%',
                maxWidth: 'none',
              },
              caption_label: {
                padding: '0',
                marginBottom: '0',
              },
              nav: {
                justifyContent: 'space-between',
              },
            }}
          />
        )
        : <div>Заглушка для выбора дня недели</div>}
      <div className={s.newTaskMenu__timePickWrapper}>
        <span>Время уведомления</span>
        <TimeField
          style={{
            width: '40px',
            padding: '0',
            height: '20px',
            borderRadius: '0',
            background: 'transparent',
            marginBottom: '0',
          }}
        />
      </div>
      <div className={s.newTaskMenu__buttonWrapper}>
        <button type="button">Отмена</button>
        <button type="button" className={s.newTaskMenu__buttonWrapper_create}>Создать</button>
      </div>
    </div>
  );
}

export default NewTaskMenu;
