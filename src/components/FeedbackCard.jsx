import React from 'react'
import { FaStar } from "react-icons/fa6";

export default function FeedbackCard({starsNum , userName , userImg , feedback}) {
  return (
    <div className='h-[300px] w-[200px] flex  items-center flex-col gap-2 mt-6'>
        <img src={userImg} alt="" className='h-28 w-28 bg-white object-cover bg-top object-left-top rounded-full border-blue-500 border-[2px]'/>
          <h1 className='text-white text-2xl uppercase'>{ userName }</h1>
        <div className="flex gap-2">
            {Array.from({length : starsNum} , (_ , index) =>(
               <FaStar key={index} className='h-5 w-5 rounded-full text-blue-500' /> 
            ))}
        </div>
          <p className='text-white text-center'>{ feedback }</p>
    </div>
  )
}
