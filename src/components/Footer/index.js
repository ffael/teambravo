import React from 'react'
import { Container, About, Info, Copy } from './styles'
import {
  FaMap,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa'

const Footer = () =>{
  return(
    <>
      <Container className={"grid section-xl"}>
        <About>
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet assumenda, expedita voluptatem porro beatae quo commodi officia pariatur itaque esse nisi hic adipisci veniam eligendi optio qui amet voluptatum animi.</p>
        </About>

        <Info>
          <h4>Get in touch</h4>
          <ul>
            <li>
              <div className="icon">
                <FaEnvelope size={30}/>
              </div>
              <div>
                <strong>Email</strong>
                <p><a href="mailto:handyman@teambravo.us">handyman@teambravo.us</a></p>
              </div>
            </li>
            <li>
              <div className="icon">
                <FaPhone size={30}/>
              </div>
              <div>
                <strong>Phone</strong>
                <p><a href="tel:111-111-1111">(111) 111-111-1111</a></p>
              </div>
            </li>
            <li>
              <div className="icon">
                <FaMap size={30}/>
              </div>
              <div>
                <strong>Address</strong>
                <p>123 Main Street, Lowell - MA</p>
              </div>
            </li>
          </ul>
        </Info>
      </Container>
      <Copy className="grid">
          <p>2019 - Bravo Handyman - All Rights Reserved ©.</p>
          <p className="dev">Developed By: <a href="https://www.tribeweb.io" target="_blank">Tribeweb.io</a></p>
      </Copy>
    </>
  )
}

export default Footer

