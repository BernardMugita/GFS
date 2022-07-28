import React from 'react'
import '../About/About.css'
import MapContainer from '../../Maps/MapContainer'
import { IoLocationSharp } from 'react-icons/io5'
import { AiFillContacts } from 'react-icons/ai'
import { Wrapper } from '@googlemaps/react-wrapper';

export default function About() {
    return (
        <div className='About'>
            <div className="landingpage">
                <div className="top">
                    <h1>About GFS LTD</h1>

                </div>
                <div className="locationtag">
                    <IoLocationSharp id='locale' />
                    <p>Mabera</p><p>Kenya</p>
                </div>
            </div>
            <div className="board-of-directors">
                <div className="head">
                    <h1>BOARD OF DIRECTORS</h1>
                </div>
                <div className="tail">
                    <div className="top">
                        <div className="dir">
                            <div className="image">
                                <img src="" alt="" />
                            </div>
                            <div className="details">
                                <h1>C.E.O/Founder</h1>
                                <h3>Charles Gesongo</h3>
                            </div>
                        </div>
                        <div className="dir" id="dir1">
                            <div className="image">
                                <img src="" alt="" />
                            </div>
                            <div className="details">
                                <h1>Co-Founder</h1>
                                <h3>Teresia Gati</h3>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="dir">
                            <div className="image">
                                <img src="" alt="" />
                            </div>
                            <div className="details">
                                <h1>Legal</h1>
                                <h3>PaulAnne Matinde</h3>
                            </div>
                        </div>
                        <div className="dir" id='dir3'>
                            <div className="image">
                                <img src="" alt="" />
                            </div>
                            <div className="details">
                                <h1>Site Reliability Engineer</h1>
                                <h3>Bernard Mugita</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="about-container">
                <div className="vision">
                    <div className="heading">
                        <h1>Vision</h1>
                    </div>
                    <div className="body">
                        <p>We Work in the Farm to Live A Rich And Fulfilling Life, <br />
                            Reconnecting To Nature, Our Family And Our Community. </p>
                    </div>
                </div>
                <div className="mission">
                    <div className="heading">
                        <h1>Mission</h1>
                    </div>
                    <div className="body">
                        <li>Promote and strengthen agribusiness and value chain development,
                            inteting agribusiness into market-oriented systems. </li>
                        <li>Promote small-scale agribusinesses and climate-smart agriculture
                            (CSA) as means of employment and entrepreneurial opportunities for youth and women.</li>
                    </div>
                </div>
                <div className="values">
                    <div className="heading">
                        <h1>Values</h1>
                    </div>
                    <div className="body">
                        <li>Farming and its contribution to nature</li>
                        <li>Working hard to live a rich life </li>
                        <li>Giving back to our community </li>
                    </div>
                </div>
            </div>

            <div className="map">
                <div className="h1">
                    <h1>We are Located at</h1>
                </div>
                <div className="tag">
                    
                </div>
                <div className="localedetails">
                    <div className="contacts">
                        <h1>Contacts</h1>
                        <div className="contact-container">
                            <div className="left">
                                <AiFillContacts id='locationicons' />
                            </div>
                            <div className="right">
                                <p><strong>Phone:</strong> +254 722 259798</p>
                                <p><strong>Phone:</strong> +254 726 205942</p>
                                <p><strong>Email:</strong> <a href="mailto:greenwatersfarm@gmail.com">greenwatersfarm@gmail.com</a> </p>
                                <p><strong>Whatsapp:</strong> +254 722 259798</p>
                            </div>
                        </div>
                    </div>
                    <div className="address">
                        <h1>Address</h1>
                        <div className="address-container">
                            <div className="left">
                                <IoLocationSharp id='locationicons' />
                            </div>
                            <div className="right">
                                <p><strong>P.O.Box:</strong> 00000-00000</p>
                                <p><strong>Address:</strong> Mabera, Migori</p>
                                <p><strong>Postal Code:</strong> 40400</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
