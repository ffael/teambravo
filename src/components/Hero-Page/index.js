import React from 'react'
// Styled Components
import { Hero, InfoBar} from './styles'

import {
  FaTwitterSquare, 
  FaFacebookSquare, 
  FaInstagram,
} from 'react-icons/fa'

const MainHero = (props) =>{
  return(
    <>
      <Hero className="grid section">
          <div>
            <h1>{props.title}</h1>
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

export default MainHero