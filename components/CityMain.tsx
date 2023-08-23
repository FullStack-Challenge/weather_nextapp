import React from 'react'
import Image from 'next/image'
import '../public/css/Weather.css'
import { type } from 'os';
import Utils from '../services/Utils';

const CityMain = (props: any) => {
    let imgPath = './img/**.png';
    let imageType = props.city.weather[0].main;
    imgPath = Utils.getImagePath(imgPath, imageType);
  return (
      <div className=" rounded-md flex items-center justify-between border-t border-gray-200 py-3 my-3 sm:my-4 sm:py-4">
          <div className="row">
              <div className="column">
                  <div className='weather-data'>
                      <h1>{props.city.city}</h1>
                      <p className="subtitle">Chance of rain: {props.city.humidity}%</p>
                      <p className="temperature">{Math.round(props.city.temp)}º</p>
                  </div>
              </div>
              <div className="column center-vh">
                  <img src={imgPath} alt='weather-img'
                      className="weather-img" />
              </div>
          </div>
      </div>
  )
}

export default CityMain