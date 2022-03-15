import React from 'react';
import './App.css';
import {Map, MapState, YMaps} from "react-yandex-maps";

const mapData: MapState = {
    center: [52.27560464492827, 104.29685611644149],
    zoom: 13,
    type: "yandex#hybrid"
}

type CoordsType = [number, number]

function App() {
    const [coords, setCoords] = React.useState<CoordsType>()


    return (
        <div className="map-container">
            <YMaps>
                <Map width={'100%'} height={'100vh'} defaultState={mapData} instanceRef={instance => {
                   //@ts-ignore
                    instance.events.add('click', (e) => {
                        let tempCoords = e.get('coords') as CoordsType
                        setCoords(tempCoords)
                        console.log(coords)
                        /*
                        Если писать так:
                        instance.events.add('click', (e) => {
                            console.log(e.get('coords'))
                        }
                        то в консоль корректно выводятся данные о координатах нажатия мыши.
                        Но, в случае с куском кода вне комментариев, возникает ошибка
                        * */
                    })
                }}/>
            </YMaps>
        </div>
    );
}

export default App;
