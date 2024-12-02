import React from 'react'
import about from '../assets/about.png'
import { TypeAnimation  } from 'react-type-animation'

const About = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>
      <div className='col-span-1 my-auto mx-auto w-[200px] h-auto lg:w-[300px]'>
        
          <img src={about} className='rounded-2xl'/>
        
      </div>

      <div className='col-span-2 px-5 my-auto'>
        <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
          <span className='primary-color'>
            I am 
          </span><br/>
          <TypeAnimation
          sequence={[
            "Bhavya Shah",
            1000,
            "Frontend dev",
            1000,
          
          ]}
          wrapper='span'
          speed={50}
          repeat={Infinity}
          />
        </h1>

        <p className='text-white sm:text-lg my-6 lg:text-xl'>
          My name is Bhavya Shah. I am a web developer, currently in 4th year of b.tech.
        </p>

        <div className='my-8'>
          <a href='/' className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-r from-yellow-100 to-pink-500 text-black hover:font-bold transition-all duration-300'>
            Resume
          </a>
          <a href='#contact' className='px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-r from-yellow-100 to-pink-500 text-white hover:border-none hover:text-black'>
            Contact Me
          </a>
        </div>

      </div>
    </div>
  )
}

export default About
