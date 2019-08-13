import React from 'react'
import Carousel from 'nuka-carousel'
// Styled Components
import { Container, Box, Title, TestimonialContainer } from './styles.js'

// Icons
import {
  FaQuoteLeft,
} from 'react-icons/fa'

// Images
import client from '../../assets/img/client.png'

export default function Testimonials(){
  const carouselSettings = {
    autoplay: true,
    width: "80%",
    pauseOnHover: false,
    swiping: false,
    withoutControls: true,
    wrapAround: true,
  }
  return (
    <Container className="grid section-xl">
      <Box className="grid">
        <Title>
          <h3>That's Why Our Clients Approve Our Work!</h3>
          <p>After years providing excelent service, this is what some of our clients have to say: </p>
        </Title>
        <Carousel {...carouselSettings}>
          <TestimonialContainer>
            <div>
              <FaQuoteLeft size={30} />
              <blockquote>Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla.</blockquote>
              <strong>Mary Doe</strong>
            </div>
            <figure>
              <img src={client} alt=""/>
            </figure>
          </TestimonialContainer>
          <TestimonialContainer>
            <div>
              <FaQuoteLeft size={30} />
              <blockquote>Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla.</blockquote>
              <strong>Joe Doe</strong>
            </div>
            <figure>
              <img src={client} alt=""/>
            </figure>
          </TestimonialContainer>
        </Carousel>
      </Box>
    </Container>
  )
}