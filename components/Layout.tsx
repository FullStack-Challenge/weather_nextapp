'use client'
import React, { useEffect, useState } from 'react'
import CityMain from '@/components/CityMain'
import WeatherFacade from '../services/WeatherFacade'
import SearchBox from '@/components/SearchBox';
import '../public/css/Weather.css';
import Forecast from './Forecast';
import AirConditions from './AirConditions';
import CityWeek from './CityWeek';
import Sidebar from './Sidebar';

const Layout = () => {
    const [msg, setMsg] = useState('');
    const [complete, setComplete] = useState({daily: [], hourly: [], current: { city: 0, temp: 0, humidity: 0, weather: [{ main: 0 }] } });
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
        <div className='grid grid-cols-12 py-5 px-5'>
            <div className=""><Sidebar/></div>
            <div className='col-span-8 mx-4'>
                <SearchBox parentCallback={handleCallback} />
                <CityMain city={complete.current} />
                <Forecast city={complete.hourly}/>
                <AirConditions city={complete.current} />
            </div>
            <div className='col-span-3'>
                <CityWeek city={complete.daily}/>
            </div>
        </div>
    )



}

export default Layout