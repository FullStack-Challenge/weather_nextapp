import Utils from '@/services/Utils';
import React from 'react'

const CityWeek = (props: any) => {
    let dates: any = [];
    console.log(props.city);

    if (props.city.length != 0) {
        for (let i = 0; i < 7; i++) {
            let now = new Date(props.city[i].dt * 1000.0);
            let imgPath = './img/**.png';
            let imageType = props.city[i].weather[0].main;
            imgPath = Utils.getImagePath(imgPath, imageType);
            let max = Math.round(props.city[i].temp.max);
            let min = Math.round(props.city[i].temp.min);
            dates.push(
                <div className='grid grid-cols-12'>
                    <div className="col-span-4 center week-forecast-txt">{i == 0 ? 'Today' : Utils.covertNumToWeekDay(now.getUTCDay())}</div>
                    <div className="col-span-6">
                        <div className="grid grid-cols-12">
                            <div className="col-span-6 center">
                                <img src={imgPath} alt="" className="week-forecast-img" />
                            </div>
                            <div className="col-span-6 center">
                                <b>{imageType}</b>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 center">
                        <b>{max}<span className='week-forecast-txt'>/{min}</span></b>
                    </div>
                </div>
            );
        }
    }
    return (
        <div className='rounded-md flex items-center justify-between border-t border-gray-200 bg-slate-200 py-3 px-3 my-7 sm:my-4 sm:py-4'>
            <div className='w-full'>
                <b><h1 className='mt-3 mb-6'>7-DAY FORECAST</h1></b>
                <div className='grid grid-rows-7 divide-y divide-slate-950'>
                    {dates}
                </div>
            </div>
        </div>
    )
}

export default CityWeek