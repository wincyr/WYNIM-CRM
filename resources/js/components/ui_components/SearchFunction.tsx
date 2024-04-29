import { Search } from 'lucide-react';
import React from 'react'

function SearchFunction() {
  return (
    <div>
      <div className='max-w-md mb-8 mx-6'>
        <h1 className='text-4xl font-bold'> Programs and Schools </h1>
      </div>
      <div className='flex justify-between items-center px-2 py-8 max-w-full my-4 mx-6'>
        <input type="text" placeholder="Search Programs and Schools" className="input input-bordered w-full mr-6" />
        <button className="btn btn-primary text-base-100 btn-wide"> Search <Search /> </button>
      </div>
    </div>
  )
}

export default SearchFunction