import React from 'react'
import uniservice from '../assets/uniservice.png'
import inventory  from '../assets/inventory.png'
import passgen from '../assets/passgen.png'

const Projects = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='project'>
      <div className='pb-8 text-center'>
        <p className='text-4xl mb-3 font-bold primary-color'>Projects</p>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative'>
          <img src={inventory}/>
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'>Inventory Management</span>
            <div className='pt-8 text-center'>
              <a href='https://github.com/bhavyashah04/SSIP-Inventory-Management-2023'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
              </a>
            </div>
          </div>
        </div>

        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative'>
          <img src={uniservice}/>
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'>Uniform placement service</span>
            <div className='pt-8 text-center'>
              <a href='https://github.com/bhavyashah04/Placement_Uniform_Service'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
              </a>
            </div>
          </div>
        </div>

        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative'>
          <img src={passgen}/>
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'>Password Generator</span>
            <div className='pt-8 text-center'>
              <a href='https://github.com/bhavyashah04/Password-generator'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
