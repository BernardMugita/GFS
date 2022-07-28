import React from 'react'
import '../Home/Home.css'
import logo3 from '../../Resources/logo3.png'
import BlogPost from '../../Components/BlogPost/BlogPost'
import { RiSearchLine } from 'react-icons/ri'

export default function Home() {
  return (
    <div className='Home'>
      <div className="header">
        <h1>GreenWater Farm Solutions LTD</h1>
        <div className='newsletter'>
          <div className="left">
            <img src={logo3} alt="" />
          </div>
          <div className="right">
            <h1>NEWSLETTER</h1>
            <p>Sign-up for our newletter and stay up to date on
              our latest releases and promotions!
            </p>
            <div className="form">
              <input type="text" placeholder='Enter your email address' />
              <button type='submit'>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="blog-posts">
            <BlogPost/>
        </div>

        <div className="left">
            <div className="search">
                <input type="text" placeholder='Search...'/>
                <button><RiSearchLine/></button>
            </div>
            <div className="categories">
              <h2>Categories</h2>
                <p>Livestock</p>
                <p>Crop Farming</p>
                <p>Technology</p>
            </div>
        </div>
      </div>
    </div>
  )
}

