import { useState } from 'react'
import './App.css'
import { GoGraph } from "react-icons/go";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineSpeaker } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

function App() {

  return (
    <>
      <div className='w-full h-screen flex'>
        <div className= 'w-[400px] h-full bg-gray-200'>
          <button className='flex justify-center items-center w-full h-[40px]  text-[25px] font-bold'>
            <GoGraph />
             Dashboard
          </button>

          <button className='flex justify-center items-center w-full h-[40px] text-[25px] font-bold'>
            <FaRegBookmark />
            Bookings
          </button>

        <button className='flex justify-center items-center w-full h-[40px] text-[25px] font-bold'>
            <MdOutlineSpeaker />
            Items
          </button>

        <button className='flex justify-center items-center w-full h-[40px] text-[25px] font-bold'>
            <MdOutlineRateReview />
            Reviews
          </button>

        <button className='flex justify-center items-center w-full h-[40px] text-[25px] font-bold'>
            <FaRegUser />
            Users
          </button>

      </div>
          <div className='w-full  bg-red-900'>
            
          </div>

      </div>
    </>
  )
}

export default App
