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
            try {
                const complete = await WeatherFacade.callWeatherXname(msg);
                setComplete(complete);
            }catch{
                console.log('not find', msg)
            }
            setLoading(false);
        }
        getComplete();
    }, [msg]);

    const handleCallback = (childData: any) => {
        setMsg(childData)
    }



    return (
        <div className='flex'>
            <div className="">Sidebar</div>
            <div className='grow'>
                <SearchBox parentCallback={handleCallback} />
                <CityMain city={complete.current} />
                {/* <Forecast />
                    <AirConditions /> */}
            </div>
            <div>Forecast</div>
        </div>
    )



}

export default Layout