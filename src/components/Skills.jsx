import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import bootstrap from '../assets/bootstrap.png'

const Skills = () => {
  return (
    <div className='text-center' id='skill'>
      <h2 className='primary-color text-4xl mb-3 font-bold m-4'>
            skills
          </h2>
        <div className='bg-black text-gray-400 border border-gray-600 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center'>
          

          <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={html}/>
            <p className='mt-2'>HTML</p>
          </div>

          <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={css}/>
            <p className='mt-2'>CSS</p>
          </div>

          <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={javascript}/>
            <p className='mt-2'>JS</p>
          </div>

          <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={bootstrap}/>
            <p className='mt-2'>BootStrap</p>
          </div>

          <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={tailwind}/>
            <p className='mt-2'>Tailwind</p>
          </div>

          <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={react}/>
            <p className='mt-2'>React</p>
          </div>
          
        </div>
    </div>
  )
}

export default Skills
