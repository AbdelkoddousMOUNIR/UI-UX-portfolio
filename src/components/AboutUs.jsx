import React from 'react'
import man2 from '../imgs/man2.png'

export default function AboutUs() {
  return (
    <div className='h-auto w-[100%] flex mt-10 py-20'>
        <div className='w-1/2 flex flex-col items-center mt-20 gap-5'>
            <h1 className='w-1/2 text-[2.5rem] font-bold text-white capitalize'>about <span className='text-blue-500'>us .</span></h1>
            <p className='w-1/2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur inventore veniam ipsum beatae autem voluptate eos temporibus, aliquid, incidunt quasi, similique assumenda! Excepturi delectus minus aperiam possimus facere :</p>
            <div className='w-1/2 flex gap-4 flex-wrap items-center'>
                <h3 className='text-white flex items-center gap-2'><div className='h-3 w-3 bg-blue-500 rounded'></div> Lorem ipsum dolor</h3>
                <h3 className='text-white flex items-center gap-2'><div className='h-3 w-3 bg-blue-500 rounded'></div> Lorem ipsum dolor</h3>
                <h3 className='text-white flex items-center gap-2'><div className='h-3 w-3 bg-blue-500 rounded'></div> Lorem ipsum dolor</h3>
                <h3 className='text-white flex items-center gap-2'><div className='h-3 w-3 bg-blue-500 rounded'></div> Lorem ipsum dolor</h3>
            </div>
            <button className='bg-blue-500 text-white text-md uppercase p-1 rounded-md self-start ml-[25%] mt-10 hover:bg-white hover:text-blue-500'>read more</button>
          </div>
          <div className='w-1/2 flex flex-col items-center'>
              <img src={man2} alt="" className='h-[400px]' />
          </div>
    </div>
  )
}
