'use client'
import React, { useEffect, useState } from 'react'
import CityMain from '@/components/CityMain'
import WeatherFacade from '../services/WeatherFacade'
import SearchBox from '@/components/SearchBox';
import '../public/css/Weather.css';

const Layout = () => {
    const [msg, setMsg] = useState('');
    const [complete, setComplete] = useState({ current: { city: 0, temp: 0, humidity: 0, weather: [{ main: 0 }] } });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getComplete() {
            setLoading(true);
            let toCall = '';
            console.log(!msg)
            if (!msg) {
                toCall = 'Bogota'
            }
            const complete = await WeatherFacade.callWeatherXname(toCall);
            setComplete(complete);
            setLoading(false);
        }
        getComplete();
    }, []);

    const handleCallback = (childData: any) => {
        setMsg(childData)
    }


    if (!loading) {
        return (
            <div className='flex'>
                <div className="">Sidebar</div>
                <div className='grow'>
                    <h1>{msg}</h1>
                    <SearchBox parentCallback={handleCallback} />
                    <CityMain city={complete.current} />
                    {/* <Forecast />
                    <AirConditions /> */}
                </div>
                <div>Forecast</div>
            </div>
        )
    }
    else {
        return (<h1>Loading...</h1>)
    }

}

export default Layout