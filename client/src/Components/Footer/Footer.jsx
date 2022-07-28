import React from 'react'
import logo3 from '../../Resources/logo3.png'
import { Link } from 'react-router-dom';
import '../Footer/footer.css'

export default function Footer() {
  return (
    <div className='Footer'>
        <div className="left">
            <img src={logo3} alt="" />
            <h1>GFS</h1>
        </div>
        <div className="center">
            <h1>Quick Links</h1>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Blog">Blog</Link>
        </div>
        <div className="right">
          <h1>Quick Links</h1>
            <Link to="/TOS">Terms of Service</Link>
            <Link to="/Privacy">Privacy Policy</Link>
            <Link to="/Downloads">Download Center</Link>
        </div>
    </div>
  )
}
