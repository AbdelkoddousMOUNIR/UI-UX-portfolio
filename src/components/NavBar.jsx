import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";

export default function NavBar() {
    let [item, setItem] = useState("home")
    
  return (
      <div className='h-[9vh] w-[100%] flex justify-between items-center px-5 fixed z-50 bg-[#181818] top-0'>
        <div className="text-white">logo</div>
        <ul className='flex gap-20 capitalize text-white'>
            <li className={`cursor-pointer relative ${item === "home" ? "Active" : ""}`} onClick={() => setItem('home')}>home</li>
            <li className={`cursor-pointer relative ${item === "about" ? "Active" : ""}`} onClick={() => setItem('about')}>about</li>
            <li className={`cursor-pointer relative ${item === "courses" ? "Active" : ""}`} onClick={() => setItem('courses')}>courses</li>
            <li className={`cursor-pointer relative ${item === "blogs" ? "Active" : ""}`} onClick={() => setItem('blogs')}>blogs</li>
        </ul>
        <div className='flex gap-12'>
          <button className='bg-white h-8 px-2 py-1 rounded text-base capitalize hover:bg-blue-500 hover:text-white'>sign in</button>
          <FaBars className='h-7 w-7 text-white rounded-lg cursor-pointer' /> 
        </div>
    </div>
  )
}
