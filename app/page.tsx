import CityMain from '@/components/CityMain'
import WeatherFacade from '../services/WeatherFacade'
import SearchBox from '@/components/SearchBox';
import '../public/css/Weather.css';
import Forecast from '@/components/Forecast';
import AirConditions from '@/components/AirConditions';

export default async function Home() {
  const city = await WeatherFacade.callWeatherXname('bogota');
  return (
    <main>
      <div className='flex'>
        <div className="">Sidebar</div>
        <div className='grow'>
          <SearchBox/>
          <CityMain city={city.current}/>
          <Forecast city={city.hourly}/>
          <AirConditions/>
        </div>
        <div>Forecast</div>
      </div>
    </main>
  )
}
