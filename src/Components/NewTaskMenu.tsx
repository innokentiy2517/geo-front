import React from 'react';
import logo from '../assets/logo.svg'

const NewTaskMenu = () => {
    return (
        <div className='taskbar'>
            <img src={logo}/>
            <h1>Создание метки</h1>
            <h2></h2>
        </div>
    );
};

export default NewTaskMenu;