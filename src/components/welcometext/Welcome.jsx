import React from 'react'
import './welcome.css'
import { FaGooglePlay,FaApple } from "react-icons/fa";
// import from asset "./phone 15.png"
const Welcome = () => {
  return (
    <div>
      <div className="text">
            <h1>Simplfy Financial Management
                with Fintrack
            </h1>
            <p>"Welcome to our financial tech company! We're here to provide you with the latest tools to simplify your financial life."</p>
            <div className='btn_section' >
                <button className='btn_2'>
                     <FaGooglePlay/> Get it on Goggle Play
                </button>
                <button className='btn_2'>
                     <FaApple/> Get it on the Apple Store
                </button>
           </div>
        </div>
    </div>
  )
}

export default Welcome
