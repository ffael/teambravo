import React from 'react'
import { Container, SectionTitle } from './styles'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const About = () => {
  const data = useStaticQuery(graphql`
    query{
      file(
        name:{
          eq:"team"
        }){
        childImageSharp{
          fixed{
            src
          }
          fluid{
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return(
    <Container className={"grid section-xl"}>
      <Img fluid={data.file.childImageSharp.fluid} alt="Hello"/>
      <img src={data.file.childImageSharp.fluid.src} />
      <SectionTitle>
        <h3>Our Sucess Story</h3>
        <p>Bravo Handyman has a complete team of professionals that can handle any project. With years of experience and expertise, you can rest assured that you will get nothing else than a well done job!</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit maxime deleniti deserunt asperiores totam incidunt neque adipisci saepe aliquam cum porro, ab molestiae odio provident dolore rerum aut aspernatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit maxime deleniti deserunt asperiores totam incidunt neque adipisci saepe aliquam cum porro, ab molestiae odio provident dolore rerum aut aspernatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit maxime deleniti deserunt asperiores totam incidunt neque adipisci saepe aliquam cum porro, ab molestiae odio provident dolore rerum aut aspernatur.
        </p>
      </SectionTitle>
    </Container>
  )
}

export default About