import React from 'react'
import { Container, SectionTitle } from './styles'
import { useStaticQuery, graphql } from 'gatsby'

export default function About(){
  const { contentfulAbout } = useStaticQuery(graphql`
    query{
      contentfulAbout{
        title
        description{
          description
        }
      }
    }
  `)
  return(
    <Container className={"grid section-xl"}>
      {/* {data.allFile.edges.map((image)=>{
        console.log(image.node.childImageSharp)
        return(
          <Img fluid={image.node.childImageSharp.fluid} />
        )
      })} */}
      <SectionTitle>
        <h3>{contentfulAbout.title}</h3>
        <p>
          {contentfulAbout.description.description}
        </p>
      </SectionTitle>
    </Container>
  )
}