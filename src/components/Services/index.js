import React from "react"
import { Container, SectionTitle, CardContainer, Card } from "./styles"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Services({ mainPage }) {
  const { allContentfulServices } = useStaticQuery(graphql`
    query {
      allContentfulServices {
        edges {
          node {
            title
            brief
            slug
            featuredImage {
              fluid(quality: 100, maxHeight: 400) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Container className={"grid section-xl"}>
      <SectionTitle>
        <h3>Our Services</h3>
        <p>
          Bravo Handyman has a complete team of professionals that can handle
          any project. With years of experience and expertise, you can rest
          assured that you will get nothing else than a well done job!
        </p>
      </SectionTitle>
      {allContentfulServices.edges.map((edge, index) => {
        return (
          <CardContainer key={index}>
            <Card reverse={index % 2 === 0}>
              <div className="content">
                <header>
                  <h3>{edge.node.title}</h3>
                </header>
                <p>{edge.node.brief}</p>
                <p>
                  <Link to={`/services/${edge.node.slug}`}>See More</Link>
                </p>
              </div>
              <figure>
                <Img
                  key={index}
                  className="imgSharp"
                  fluid={edge.node.featuredImage.fluid}
                />
              </figure>
            </Card>
          </CardContainer>
        )
      })}
    </Container>
  )
}
