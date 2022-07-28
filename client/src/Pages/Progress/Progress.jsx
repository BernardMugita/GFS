import React from 'react'
import '../Progress/Progress.css'
import logo3 from '../../Resources/logo3.png'
import { SiProgress } from 'react-icons/si'
import image1 from '../../Resources/spinach.jpg'
import image2 from '../../Resources/greenhouse.jpg'

export default function Progress() {
  return (
    <div className="Progress">
      <div className="progress-body">
        <div className="title-top">
          <h1>Overview</h1>
          <div className="progress-icon">
              <SiProgress id='prog'/>
          </div>
        </div>
        <div className="over-body">
          <p>
            Agriculture provides livelihoods to many people, especially in rural areas. Yet, the impact of climate change and increasing
            pressure on agricultural systems are affecting the stability of households. The only way to increase food production is to
            invest in sustainable technologies and climate-smart agriculture. These kinds of investments would enable us to produce
            more food with less of an environmental impact, hence,
            promoting economic health in our farm and community. The
            idea of Greenwaters Farm Solutions (GFS) Ltd is based on these
            basics; “sustainable technologies and climate-smart
            agriculture”.
          </p>
        </div>
        <div className="title">
          <h1>Progress</h1>
        </div>
        <div className="body">
          <div className="left">
            <h1>Spinach Farming</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, officiis optio, doloribus rerum exercitationem sapiente odit ea porro vero assumenda reiciendis doloremque impedit consequuntur quisquam, necessitatibus suscipit fugit tenetur voluptatem!</p>
          </div>
          <div className="right">
                <img src={image1} alt="" />
          </div>
        </div>
        <div className="title">
          <h1>Progress</h1>
        </div>
        <div className="body">
          <div className="left">
              <img src={image2} alt="" />
          </div>
          <div className="right">
          <h1>Open Field Farming</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, officiis optio, doloribus rerum exercitationem sapiente odit ea porro vero assumenda reiciendis doloremque impedit consequuntur quisquam, necessitatibus suscipit fugit tenetur voluptatem!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
