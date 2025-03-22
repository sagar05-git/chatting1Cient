import React from 'react'
import { FaSearch } from 'react-icons/fa';
const SearchBar = () => {
  return (
    <div className="w-full h-auto  flex justify-center items-center">
      <div className="w-full h-16 flex justify-between items-center relative p-2 ">
        <input type='text' placeholder='Search here...' className="p-2 outline-none flex-grow  bg-purple-100 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-2 border-gray-400 text-blue-800 text-xl placeholder-gray-600 "/>
        <FaSearch className="text-xl border-gray-400 font-bold absolute right-4 cursor-pointer" />
      </div>
    </div>
  )
}

export default SearchBar
