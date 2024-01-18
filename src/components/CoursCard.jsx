import React from 'react'

export default function CoursCard({courseNum , courseDescription}) {
  return (
    <div className='w-60 h-[300px] border-[2px] border[white] relative flex flex-col justify-center items-center'>
        <span className='bg-white h-9 w-9 absolute top-0 left-0 p-1'>.{ courseNum }</span>
        <h1 className='text-2xl text-white uppercase'>course <span className='text-blue-500'>{ courseNum }</span></h1>
        <hr className='h-[3px] w-16 bg-blue-500 border-none rounded mt-1'/>
          <p className='text-center text-white p-5'>{ courseDescription }</p>
        <button className='bg-blue-500 uppercase text-white text-sm p-[5px] rounded absolute bottom-4'>read more</button>
    </div>
  )
}
