import React from 'react';
import logo from "../assets/logo.svg"
import searchIcon from "../assets/search-icon.svg"
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/tabs";

const tabs = [{text: "Текущие"}, {text: "Постоянные"}, {text: "Выполненные"}]

const TaskList = () => {
    return (
        <div className='taskbar'>
            <img src={logo} alt="Logo"/>
            <h1>Список заданий</h1>
            <div className='search-input'>
                <button>
                    <img src={searchIcon}/>
                </button>
                <input placeholder='Поиск'/>
            </div>
            <Tabs>
                <TabList className='tabs-switch'>
                    {tabs.map(((value, index) =>
                    {return <Tab className='tabs-switch__item' _selected={{background: '#fbfbfb'}}
                                                       key={index}>{value.text}</Tab>}))}
                </TabList>
                <TabPanels>
                    <TabPanel>Список текущих заданий</TabPanel>
                    <TabPanel>Список постоянных заданий</TabPanel>
                    <TabPanel>Список выполненных заданий</TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
};

export default TaskList;