import React from "react"
import { Container, SectionTitle } from "./styles"
import { useStaticQuery, graphql } from "gatsby"

export default function About({ mainPage }) {
  const { contentfulAbout, contentfulWhyChooseUs } = useStaticQuery(graphql`
    query {
      contentfulAbout {
        title
        description {
          description
        }
      }
      contentfulWhyChooseUs {
        title
        description {
          description
        }
      }
    }
  `)
  return (
    <Container className={"grid section-xl"}>
      <SectionTitle>
        {mainPage === true ? (
          <>
            <h3>{contentfulWhyChooseUs.title}</h3>
            <p>{contentfulWhyChooseUs.description.description}</p>
          </>
        ) : (
          <p>{contentfulAbout.description.description}</p>
        )}
      </SectionTitle>
    </Container>
  )
}
