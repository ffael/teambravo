import React from 'react'
import { Container, SectionTitle } from './styles'

const NotFound = () => {
  return(
    <Container className={"grid section-xl"}>
      <SectionTitle>
        <h3>Sorry!</h3>
        <p>We could not find the page you are looking for. Maybe you misstyped or the page is not available at the moment.</p>
      </SectionTitle>
    </Container>
  )
}

export default NotFound