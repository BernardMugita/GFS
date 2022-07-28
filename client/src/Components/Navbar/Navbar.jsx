import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../Navbar/navbar.css'
import { IoReorderFour } from 'react-icons/io5'
import { GrFacebook, GrTwitter, GrInstagram, GrLinkedin} from 'react-icons/gr'

export default function Navbar() {
  const [show, setShow] = useState(false)
  return (
    <div className='navbar'>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/2021-2025-SP">2021 - 2025 Strategic Plan</Link>
            <Link to="/Progress">Progress</Link>
            <Link to="/Downloads">Download Center</Link>
          </div>
                  <div className="menu">
                      <IoReorderFour id="reorder" onClick={()=>setShow(!show)}/>
                          { 
                            show?<div className="drop">
                                <div className="search">
                                    </div>                            
                                    <Link to="/">Home</Link>
                                    <Link to="/About">About</Link>
                                    <Link to="/2021-2025-SP">2021-2025 Strategic Plan</Link>
                                    <Link to="/Progress">Progress</Link>
                                    <Link to="/Downloads">Download Center</Link>
                                    <Link to="/Blog">Blog</Link>
                                    
                                    <div className="socials">
                                        <GrFacebook id='soc'/>
                                        <GrTwitter id='soc'/>
                                        <GrInstagram id='soc'/>
                                        <GrLinkedin id='soc'/>
                                    </div>
                                </div>:null
                          }
                  </div>
    </div>
  )
}
