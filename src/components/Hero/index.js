import React from 'react'
import {Hero, InfoBar} from './styles.js'
import {
  FaTwitterSquare, 
  FaFacebookSquare, 
  FaInstagram,
} from 'react-icons/fa'

export default function MainHero(){
  return(
    <>
      <Hero className="grid section">
          <div>
            <h1>Bravo has a team of professionals that can take any job!
            Get to know us!</h1>
          </div>
        </Hero>
        <InfoBar className="grid">
          <div>
            Follow Us:
            <ul>
              <li><a href="index.html"><FaInstagram size={20} color={'#570A0A'}/></a></li>
              <li><a href="index.html"><FaTwitterSquare size={20} color={'#570A0A'}/></a></li>
              <li><a href="index.html"><FaFacebookSquare size={20} color={'#570A0A'}/></a></li>
            </ul>
          </div>

          <div>
            Give us a Call: <a href="tel:111111111">(978) 596-5350</a>
          </div>
        </InfoBar>
      </>
  )
}