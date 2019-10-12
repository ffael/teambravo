import React from 'react'
import { Container, SectionTitle, CardContainer, Card } from './styles'

import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

const Projects = ()=> {
  const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark(
        filter:{
          frontmatter:{
            type:{
              eq: "project"
            }
          }
        }
      ){
        edges{
          node{
            excerpt
            fields{
              slug
            }
            frontmatter{
              client
              service
              city
              state
              featuredImage{
                childImageSharp{
                  fixed(width:400){
                    ...GatsbyImageSharpFixed
                  }
                  fluid{
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return(
    <Container className={"grid section-xl"}>
      {data.allMarkdownRemark.edges.map((edge,index)=>{
        return(
          <CardContainer key={index}>
            <Card reverse={false}>
              <div className="content">
                <header>
                  <h3>{edge.node.frontmatter.service}</h3>
                  <p>{`${edge.node.frontmatter.city} - ${edge.node.frontmatter.state}`}</p>
                </header>
                <p>{edge.node.excerpt}</p>
                <p><Link to={`/projects/${edge.node.fields.slug}`}>See More</Link></p>
              </div>
              <figure>
                <Img key={index} className="imgSharp"
                  fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}
                  alt={edge.node.excerpt} />
              </figure>
            </Card>
          </CardContainer>
        )
      })}
    </Container>
  )
}

export default Projects