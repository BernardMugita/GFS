import React from 'react'
import { RiSearchLine } from 'react-icons/ri'
import '../Single/Single.css'
import SinglePost from '../../Components/SinglePost/SinglePost'

export default function Single() {
  return (
    <div className='Single'>
        <div className="main">
            <SinglePost/>

        </div>
        <div className="side">
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
  )
}
