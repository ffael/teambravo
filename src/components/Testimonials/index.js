import React from 'react'
import Carousel from 'nuka-carousel'
import Truncate from 'react-truncate'
// Styled Components
import { Container, Box, TestimonialContainer, Title } from './styles'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

// Icons
import {
  FaQuoteLeft,
} from 'react-icons/fa'

const Testimonials = () =>{

  const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark(filter:{
        frontmatter:{
          type:{
            eq:"testimonial"
          }
        }
      }){
        edges{
          node{
            html
            frontmatter{
              client
              service
              city
              state
              featuredImage{
                childImageSharp{
                  fixed(width:300){
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const carouselSettings = {
    autoplay: true,
    width: "100%",
    pauseOnHover: true,
    swiping: true,
    withoutControls: false,
    wrapAround: true,
    slidesToShow: 1,
    transitionMode: "scroll",
  }
  return (
    <Container className="section-xl">
      <Box className="grid">
        <Title>
          <h3>That's Why Our Clients Approve Our Work!</h3>
          <p>After years providing excelent service, this is what some of our clients have to say: </p>
        </Title>
        <Carousel {...carouselSettings}>
          {data.allMarkdownRemark.edges.map((edge, index)=>{
            return(
              <TestimonialContainer key={index}>
                <div>
                  <FaQuoteLeft size={30} />
                  <Truncate lines={3} width={600} className="truncate">
                    <blockquote dangerouslySetInnerHTML={{__html:edge.node.html}}></blockquote>
                  </Truncate>
                  <strong>{`${edge.node.frontmatter.client} - ${edge.node.frontmatter.city} - ${edge.node.frontmatter.state}`}</strong>
                </div>
                <figure>
                  <Img fixed={edge.node.frontmatter.featuredImage.childImageSharp.fixed} />
                </figure>
              </TestimonialContainer>
            )
          })}
        </Carousel>
      </Box>
    </Container>
  )
}

export default Testimonials