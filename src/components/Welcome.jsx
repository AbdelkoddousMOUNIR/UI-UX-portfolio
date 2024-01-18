import React from 'react'
import man from '../imgs/man.png'
import Banner from './Banner'

export default function Welcome() {
  return (
    <div className='h-[91vh] relative mt-[9vh]'>
        <div className='grid grid-cols-3 '>
            <div className='relative'>
                <div className='flex absolute top-14 left-6 gap-5 items-center'>
                    <h1 className='text-7xl font-bold text-white'>UI/UX</h1>
                    <div className='h-6 w-6 bg-blue-500 rounded-full'></div>
                </div>
                <h2 className='absolute top-80 left-[-40px] text-3xl uppercase rotate-[-90deg] text-white'>beginner's</h2>
                <div className='flex absolute top-80 left-28 gap-2'>
                    <div className='h-3 w-3 bg-blue-500 rounded mt-2'></div>
                    <h2 className='capitalize text-xl text-white'>becom a <br /><span className='text-blue-500'>pro-designer</span></h2>
                </div>
            </div>
            <div className='relative flex justify-center items-center'>
                <div className='h-[300px] w-[300px] bg-blue-500 rounded-full mt-24'></div>
                <img src={man} alt="" className='absolute top-24 h-[400px]'/>
            </div>
            <div className='relative'>
                <h2 className='text-white text-xl uppercase border-[3px] border-[white] border-r-0 w-32 text-center absolute top-24 right-0'>edition <br /><span>2023</span></h2>
                <div className='absolute top-48'>
                    <h1 className='text-2xl text-white capitalize'>start your careere as a designer</h1>
                    <p className='w-[70%] mt-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nostrum eaque aliquam vel nihil asperiores ipsam.</p>
                    <div className='flex gap-3 mt-7'>
                        <button className='text-white bg-blue-500 p-2 rounded-md'>Let's Start</button> 
                        <button className='text-white border-[2px] border-blue-500 p-2 rounded-md' >Read More</button>
                    </div>  
                </div>
            </div>
        </div>
        <Banner />
    </div>
  )
}
