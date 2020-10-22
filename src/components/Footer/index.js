import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, About, Info, Copy } from './styles'
import {
  FaMap,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa'

const Footer = () =>{
  const { contentfulAbout, site } = useStaticQuery(graphql`
    query{
      contentfulAbout{
        title
        description{
          description
        }
      }
      site{
        siteMetadata{
          email
        }
      }
    }
  `)
  return(
    <>
      <Container className={"grid section-xl"}>
        <About>
          <h4>About Us</h4>
          <p>{contentfulAbout.description.description}</p>
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
                <p><a href={`mailto:${site.siteMetadata.email}`} rel="noopener noreferrer">{site.siteMetadata.email}</a></p>
              </div>
            </li>
            <li>
              <div className="icon">
                <FaPhone size={30}/>
              </div>
              <div>
                <strong>Phone</strong>
                <p><a href="tel:6178705344" rel="noopener noreferrer">(617) 970-5344</a></p>
              </div>
            </li>
            <li>
              <div className="icon">
                <FaMap size={30}/>
              </div>
              <div>
                <strong>Address</strong>
                <p>136 Dalton St.
                Lowell, Massachusetts</p>
              </div>
            </li>
          </ul>
        </Info>
      </Container>
      <Copy className="grid">
          <p>2020 - Bravo Handyman - All Rights Reserved ©.</p>
          {/* <p className="dev"><a href="https://www.tribeweb.io" target="_blank" rel="noopener noreferrer">Tribeweb.io</a></p> */}
      </Copy>
    </>
  )
}

export default Footer

