import React from 'react'

export default function Footer() {
  return (
    <div className='h-[50vh] bg-blue-500 flex'>
        <div className='w-[25%] flex flex-col ml-20 justify-center'>
            <h1 className='text-white capitalize text-2xl'>about</h1>
            <hr className='w-10 h-[3px] bg-white rounded-lg'/>
            <div className='text-white capitalize mt-3 cursor-pointer'>
                <h3>history</h3> 
                <h3>our team</h3> 
                <h3>mission statement</h3> 
                <h3>terms & condition</h3> 
                <h3>privacy poh3cy</h3>
            </div>
        </div>
        <div className='w-[25%] flex flex-col ml-20 justify-center'>
        <h1 className='text-white capitalize text-2xl'>what we do</h1>
            <hr className='w-14 h-[3px] bg-white rounded-lg'/>
            <div className='text-white capitalize mt-3 cursor-pointer'>
                <h3>news and stories</h3> 
                <h3>publication</h3> 
                <h3>take action</h3> 
                <h3>recomendation</h3> 
                <h3>help</h3>
            </div>
        </div>
        <div className='w-1/2 flex gap-4 flex-col ml-20 justify-center items-end mr-10'>
            <div className='text-2xl text-white capitalize'>
                <h1 >sign to recieve</h1>
                <div className='flex items-center gap-1'>
                    <hr className='h-[3px] w-10 bg-white mt-2'/><h1>our newsltter</h1>
                </div>  
            </div>
            <input type="text" placeholder='Mail' className='p-2 w-[60%] border-none outline-none'/>
              <div className='flex gap-10 mt-5 items-center'>
                <h2 className='text-[1.1rem] text-white uppercase'>follow us!</h2>
                <div className='h-[40px] w-[40px] bg-white rounded-full'></div>
                <div className='h-[40px] w-[40px] bg-white rounded-full'></div>
                <div className='h-[40px] w-[40px] bg-white rounded-full'></div>
            </div>
        </div>
    </div>
  )
}
