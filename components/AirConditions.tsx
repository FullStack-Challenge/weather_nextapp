import React from 'react'

const AirConditions = () => {
  return (
    <div className="row">
        <div className="row">
        <div className="row data">
            <p className="title">Air conditions</p>
            <div className="column">
                <div className='row'>
                    <div className='column-25 center-h'>
                        <img
                            src="./img/hot.png"
                            alt="Air conditions"
                            className="weather-img"
                        />
                    </div>
                    <div className='column-75'>
                        <p className="category-title">Real feel</p>
                        <p className="category-value">{/* {props.city.feels_like} */}º</p>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className='row'>
                    <div className='column-25 center-h'>
                        <img
                            src="/../public/img/blizzard.png"
                            alt="Blizzard"
                            className="weather-img"
                        />
                    </div>
                    <div className='column-75'>
                        <p className="category-title">Wind</p>
                        <p className="category-value">{/* {props.city.wind_speed} */} km/h</p>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className='row'>
                    <div className='column-25 center-h'>
                        {/* <Image
                            src="/../public/img/drops.png"
                            alt="Drops"
                            className="weather-img"
                            width={50}
                            height={24}
                        /> */}
                    </div>
                    <div className='column-75'>
                        <p className="category-title">Chance of rain</p>
                        <p className="category-value">{/* {props.city.humidity} */}%</p>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className='row'>
                    <div className='column-25 center-h'>
                        {/* <Image
                            src="/../public/img/sunblack.png"
                            alt="Sun"
                            className="weather-img"
                            width={50}
                            height={24}
                        /> */}
                    </div>
                    <div className='column-75'>
                        <p className="category-title">UV Index</p>
                        <p className="category-value">None</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AirConditions