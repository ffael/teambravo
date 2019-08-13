import React from 'react'
// Styled Components
import { Container, Box, Title, TestimonialContainer } from './styles.js'

// Icons
import {
  FaQuoteLeft,
} from 'react-icons/fa'

// Images
import client from '../../assets/img/client.png'

export default function Testimonials(){
  return (
    <Container className="grid section-xl">
      <Box className="grid">
        <Title>
          <h3>That's Why Our Clients Approve Our Work!</h3>
          <p>After years providing excelent service, this is what some of our clients have to say: </p>
        </Title>

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
      </Box>
    </Container>
  )
}