import React from 'react'
import { Container, SectionTitle } from './styles'
// import { useStaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'

const About = () => {
  // const data = useStaticQuery(graphql`
  //   query{
  //     allFile(
  //       filter:{
  //         relativeDirectory:{
  //           eq:"services/img"
  //         }
  //         ext:{
  //           eq:".jpg"
  //         }
  //     }){
  //       edges{
  //         node{
  //           childImageSharp{
  //             fixed{
  //               ...GatsbyImageSharpFixed
  //             }
  //             fluid{
  //               ...GatsbyImageSharpFluid
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return(
    <Container className={"grid section-xl"}>
      {/* {data.allFile.edges.map((image)=>{
        console.log(image.node.childImageSharp)
        return(
          <Img fluid={image.node.childImageSharp.fluid} />
        )
      })} */}
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