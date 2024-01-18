import React from 'react'
import man from '../imgs/homme-chemise-carreaux-noeud-papillon-studio.jpg'

export default function WheyUs() {
  return (
      <div className='h-auto w-[100%] flex mt-10 py-20'>
         <div className='w-1/2 flex flex-col items-center'>
              <img src={man} alt="" className='w-[300px] rounded-2xl' />
          </div> 
        <div className='w-1/2 flex flex-col items-center mt-20 gap-5'>
            <h1 className='w-1/2 text-[2.5rem] font-bold text-white capitalize'>whey <span className='text-blue-500'>us .</span></h1>
            <p className='w-1/2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur inventore veniam ipsum beatae autem voluptate eos temporibus, aliquid, incidunt quasi, similique assumenda! Excepturi delectus minus aperiam possimus facere :</p>
            <button className='bg-white text-blue-500 text-md uppercase p-1 rounded-md self-start ml-[25%] mt-10 hover:bg-blue-500 hover:text-white'>read more</button>
        </div>
    </div>
  )
}
