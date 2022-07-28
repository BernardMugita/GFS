import React from 'react'
import '../Topbar/topbar.css'
import logo from '../../Resources/logo3.png'
import { GrFacebook, GrTwitter, GrInstagram, GrLinkedin} from 'react-icons/gr'

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="sitename">
            <h1>GFS</h1>
        </div>
        <div className="socials">
            <GrFacebook id='soc'/>
            <GrTwitter id='soc'/>
            <GrInstagram id='soc'/>
            <GrLinkedin id='soc'/>
        </div>
    </div>
  )
}
