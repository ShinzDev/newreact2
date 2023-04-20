import React from 'react'
import './nav.css'




const Navbar = () => {
  return (
    <div>
      <nav>
      <div className="LOGO">
          <h1><i class="fa-solid fa-bolt"></i>Fintrack</h1>
        </div>
        <div className="right">
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Product</li>
            <button className='btn_1'><i class="fa-solid fa-file-arrow-down"></i>Download</button>
          </ul>
        </div>
      
      </nav>
       </div>
    
  )
}

export default Navbar
