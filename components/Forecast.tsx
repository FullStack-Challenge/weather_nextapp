import React from 'react'
import Utils from '../services/Utils';


function Forecast(props: any) {
    let dates: any = [];
    for (let i = 0; i < 18; i += 3) {
        let now = new Date(props.city[i].dt * 1000.0);
        let imgPath = './img/**.png';
        let imageType = props.city[i].weather[0].main;
        imgPath = Utils.getImagePath(imgPath, imageType);
        let temp = Math.round(props.city[i].temp);
        dates.push(
            <div className="row-forecast">
                    <div key={i}>
                        <p className='paragraph-weather'>{now.toLocaleTimeString().replace(':00','')}</p>
                        <img 
                        src={imgPath} alt='weather-img'
                        className="forecast-img" 
                        />
                        <p className='paragraph-weather'>{temp}º</p>
                    </div>
            </div>
        );
    }
    return (
        <div className="rounded-md flex items-center justify-between border-t border-gray-200 bg-white py-3 px-3 my-3 sm:my-4 sm:py-4">
            <div className="row">
                <div>
                    <b><h1 className='mt-3 mb-6'>TODAY'S FORECAST</h1></b>
                    <div className="grid grid-cols-6 gap-6 items-center justify-between divide-x">
                        {dates}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forecast