import React from 'react'
import FeedbackCard from './FeedbackCard'
import { feedbacks } from '../data/feedbacks'

export default function UsersFeedback() {
  return (
    <div className='h-auto'>
        <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-6xl text-white font-bold'>what</h1>
            <h2 className='text-3xl text-blue-500'>users think</h2> 
        </div>
        <div className='flex justify-around items-center flex-wrap pb-10 mt-10'>
            {feedbacks.map((item , index) =>(<FeedbackCard key={index} starsNum={item.starsNum} userName={item.userName} userImg={item.userImg} feedback={item.feedback}/>))}
        </div>
    </div>
  )
}
