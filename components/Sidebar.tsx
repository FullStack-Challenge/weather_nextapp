import Link from 'next/link'
import React from 'react'

function Sidebar() {
  return (
    <div className='rounded-md flex border-t border-gray-200 bg-slate-200 h-1/2 w-3/5'>
        <div className='grid grid-rows-4'>
            <div className='center'>
                <Link href="/"><img src="./img/weather.png" alt="logo" className='weather-logo'/></Link>
            </div>
            <div>Item #1</div>
            <div>Item #2</div>
            <div>Item #3</div>
        </div>
    </div>
  )
}

export default Sidebar