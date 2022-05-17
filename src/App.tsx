import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './sass/App.sass';
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import CustomMap from "./Components/CustomMap"
import MapPage from "./Pages/MapPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'registration'} element={<RegistrationPage/>}/>
                <Route path={'/'} element={<MapPage/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
