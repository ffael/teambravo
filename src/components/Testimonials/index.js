import React from 'react'
import Carousel from 'nuka-carousel'
import Truncate from 'react-truncate'
// Styled Components
import { Container, Box, TestimonialContainer, Title } from './styles'

// Icons
import {
  FaQuoteLeft,
} from 'react-icons/fa'

// Images
import client from '../../assets/img/client.png'
import clientA from '../../assets/img/client2.png'



const Testimonials = () =>{
  const carouselSettings = {
    autoplay: true,
    width: "100%",
    pauseOnHover: true,
    swiping: false,
    withoutControls: true,
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
              <Truncate lines={3} width={600} className="truncate">
                <blockquote>Team Bravo did an excelent work at my front porch. They changed all the rotten wood and repainted the whole thing. I couldn't be happier.</blockquote>
              </Truncate>
              <strong>Joe Doe</strong>
            </div>
            <figure>
              <img src={clientA} alt=""/>
            </figure>
          </TestimonialContainer>
        </Carousel>
      </Box>
    </Container>
  )
}

export default Testimonials