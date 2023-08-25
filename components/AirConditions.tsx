import React from 'react'

const AirConditions = (props: any) => {
    return (
        <div className="rounded-md flex items-center justify-between border-t border-gray-200 bg-slate-200 py-3 px-3 my-3 sm:my-4 sm:py-4">
            <div>
                <b><h1 className='mt-3 mb-6'>AIR CONDITIONS</h1></b>
                <div className="grid grid-cols-12 gap-4 items-center justify-between w-full">
                    <div className="flex col-span-6">
                        <div className='h-20'>
                            <img className='air-img' src="./img/hot.png" alt="" />
                        </div>
                        <div className='grow'>
                            <b className='air-title'>Real feel</b><br />
                            <b className='air-value'>{Math.round(props.city.feels_like)}º</b>
                        </div>
                    </div>
                    <div className="flex col-span-6">
                        <div className='h-20'>
                            <img className='air-img' src="./img/blizzard.png" alt="" />
                        </div>
                        <div className='grow'>
                            <b className='air-title'>Wind</b><br />
                            <b className='air-value'>{props.city.wind_speed} km/h</b>
                        </div>
                    </div>
                    <div className="flex col-span-6">
                        <div className='h-20'>
                            <img className='air-img' src="./img/drops.png" alt="" />
                        </div>
                        <div className='grow'>
                            <b className='air-title'>Chance of rain</b><br />
                            <b className='air-value'>{props.city.humidity}%</b>
                        </div>
                    </div>
                    <div className="flex last-air">
                        <div className='h-20'>
                            <img className='air-img' src="./img/sunblack.png" alt="" />
                        </div>
                        <div className='grow'>
                            <b className='air-title'>UV Index</b><br />
                            <b className='air-value'>None</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AirConditions