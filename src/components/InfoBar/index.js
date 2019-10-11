import React from 'react'
// Styled Components
import { Container} from './styles'

import {
  FaFacebookSquare, 
  FaFacebookMessenger,
} from 'react-icons/fa'

const InfoBar = () =>{
  return(
    <Container className="grid">
      <div>
        Follow Us:
        <ul>
          <li><a href="https://m.me/bravohandyman" target="_blank"><FaFacebookMessenger size={20} color={'#570A0A'}/></a></li>
          <li><a href="https://www.facebook.com/bravohandyman/" target="_blank"><FaFacebookSquare size={20} color={'#570A0A'}/></a></li>
        </ul>
      </div>

      <div>
        Give us a Call: <a href="tel:6178705344">(617) 970-5344</a>
      </div>
    </Container>
  )
}

export default InfoBar