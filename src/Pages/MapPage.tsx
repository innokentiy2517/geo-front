import React from 'react';
import CustomMap from "../Components/CustomMap";
import TaskList from "../Components/TaskList";
import NewTaskMenu from "../Components/NewTaskMenu";

const MapPage = () => {
    return (
        <div className='map_page_wrapper'>
            <NewTaskMenu/>
            <CustomMap/>
        </div>
    );
};

export default MapPage;