import Link from 'next/link'
import React from 'react'

function Sidebar() {
  return (
    <div className='rounded-md flex border-t border-gray-200 bg-slate-200 h-1/2 w-3/5'>
      <div className='grid grid-rows-5'>
        <div className='center'>
          <a href='/'><img src="./img/weather.png" alt="logo" className='weather-logo' /></a>
        </div>
        <div>
          <Link href="/">
            <img src="./img/weather-logo.png" alt="" className='weather-logo-secondary' />
            <p className='text-align-center'>Weather</p>
          </Link>
        </div>
        <div>
          <Link href="/">
            <img src="./img/earth.png" alt="" className='weather-logo-secondary' />
            <p className='text-align-center'>Cities</p>
          </Link>
        </div>
        <div>
          <Link href="/">
            <img src="./img/mapa.png" alt="" className='weather-logo-secondary' />
            <p className='text-align-center'>Map</p>
          </Link>
        </div>
        <div>
          <Link href="/">
            <img src="./img/settings.png" alt="" className='weather-logo-secondary' />
            <p className='text-align-center'>Settings</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar