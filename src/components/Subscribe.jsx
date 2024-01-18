import React from 'react'
import man from '../imgs/man3.png'

export default function Subscribe() {
  return (
    <div className='h-auto mt-20 flex w-[100%]'>
        <img src={man} alt="" className='w-[50%]' />
        <div className='flex flex-col justify-center items-center w-[50%] mb-16'>
          <div className='flex flex-col gap-2 text-center capitalize'>
            <h1 className='text-5xl font-bold text-white'>subscribe</h1>
            <h2 className='text-3xl text-blue-500 lowercase'>to our newsletter</h2>
            <p className='px-14 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum sunt ea neque deleniti esse? Voluptates nulla alias aperiam doloribus ipsa illum consequuntur eaque? Iusto odit dignissimos unde a qui sed?</p>
          </div>
          <form className='flex flex-col gap-6 w-[400px] mt-12'>
            <input type="text" className='p-2 border-blue-500 border-[3px] bg-transparent text-white outline-none' placeholder='Name' required/>
            <input type="email" className='p-2 border-blue-500 border-[3px] bg-transparent text-white outline-none' placeholder='Mail'required/>
            <textarea cols="30" rows="5" className='p-2 border-blue-500 border-[3px] bg-transparent text-white outline-none' placeholder='Message' required></textarea>
            <button type='sumbit' className='bg-blue-500 text-white text-md uppercase p-2 text-[0.9rem] self-start mt-10 hover:bg-white hover:text-blue-500'>send message</button>
          </form>
        </div>
    </div>
  )
}
