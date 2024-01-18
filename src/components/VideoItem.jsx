import React from 'react'
import video from '../imgs/video.mp4'

export default function VideoItem() {
  return (
    <div className='flex justify-center items-center pb-14 relative'>
      <div className='text-white text-xl uppercase absolute -left-14 top[30%] -rotate-90'>
        <h1>ready to get started</h1>
      </div>
      <video src={video} controls className='w-1/2 rounded-2xl'></video>
      <div className='text-white text-xl uppercase absolute -right-14 top[30%] rotate-90'>
        <h1>ready to get started</h1>
      </div>
    </div>
  )
}
