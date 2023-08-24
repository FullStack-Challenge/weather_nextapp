import CityMain from '@/components/CityMain'
import WeatherFacade from '../services/WeatherFacade'
import SearchBox from '@/components/SearchBox';
import '../public/css/Weather.css';
import Forecast from '@/components/Forecast';
import AirConditions from '@/components/AirConditions';
import { useState } from 'react';
import Layout from '@/components/Layout';

export default async function Home() {
  const city = await WeatherFacade.callWeatherXname('bogota');
  return (
    <main>
      <Layout/>
    </main>
  )
}
