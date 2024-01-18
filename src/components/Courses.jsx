import React from 'react'
import CoursCard from './CoursCard'
import { courses } from '../data/courses'

export default function Courses() {
  return (
    <div className='h-auto p-5'>
      <h1 className='text-6xl uppercase text-blue-500 font-bold'>find <span className='text-3xl font-normal text-white'>you'r course.</span></h1>
      <div className='flex justify-center gap-6 items-center flex-wrap p-10'>
        {courses.map((item, index) => (<CoursCard key={index} courseNum = {item.courseNum} courseDescription = { item.courseDescription }/>))}
      </div>
      <div className='flex justify-center items-center text-white uppercase cursor-pointer'>
        <span>more courses</span>
      </div>
    </div>
  )
}
