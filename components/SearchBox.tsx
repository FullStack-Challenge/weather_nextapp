import React from 'react'

const SearchBox = () => {
  return (
    <div className="col-span-full">
        <div className="sm:col-span-4">
            <div className="mt-2">
                    <input
                    type="text"
                    name="search"
                    id="search"
                    autoComplete="search"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Search..."
                    />
            </div>
        </div>
    </div>
  )
}

export default SearchBox