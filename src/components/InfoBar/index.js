import React from 'react'
// Styled Components
import { Container} from './styles'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

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
          <li><OutboundLink href="https://m.me/bravohandyman" target="_blank" rel="noopener noreferrer"><FaFacebookMessenger size={20} color={'#570A0A'}/></OutboundLink></li>
          <li><OutboundLink href="https://www.facebook.com/bravohandyman/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare size={20} color={'#570A0A'}/></OutboundLink></li>
        </ul>
      </div>

      <div>
        Give us a Call: <a href="tel:6178705344">(617) 970-5344</a>
      </div>
    </Container>
  )
}

export default InfoBar