import React from 'react'

export default function Banner() {
  return (
    <div className='h-[100px] w-[100%] absolute bottom-0 shadow-xl bg-[#131313] grid grid-cols-3'>
        <div className='flex items-center justify-center'>
            <span className='text-4xl text-blue-500 font-bold'>+</span>
            <h1 className='text-3xl text-white ml-1'>400</h1>
            <h2 className='ml-3 text-lg uppercase text-white'>happy <br /><span className='font-bold'>students</span></h2>
        </div>
        <div className='flex items-center justify-center'>
            <span className='text-4xl text-blue-500 font-bold'>+</span>
            <h1 className='text-3xl text-white ml-1'>50</h1>
            <h2 className='ml-3 text-lg uppercase text-white'>certified <br /><span className='font-bold'>courses</span></h2>
        </div>
        <div className='flex items-center justify-center'>
            <span className='text-4xl text-blue-500 font-bold'>+</span>
            <h1 className='text-3xl text-white ml-1'>1200</h1>
            <h2 className='ml-3 text-lg uppercase text-white'>awards <br /><span className='font-bold'>received</span></h2>
        </div>
    </div>
  )
}
