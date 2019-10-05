import React from 'react'
import { Container, SectionTitle, CardContainer, Card } from './styles'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Services = () => {
  const data = useStaticQuery(graphql`
    query Data{
      allMarkdownRemark{
        edges{
          node{
            frontmatter{
              title
              description
              name
            }
            fields{
              slug
            }
          }
        }
      }
      allFile(filter:{
        relativeDirectory:{
          eq:"services/img"
        }
        ext:{
          eq:".jpg"
        }
      }){
        edges{
          node{
            name
            childImageSharp{
              fixed{
                ...GatsbyImageSharpFixed
              }
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    },
  `)

  return(
    <Container className={"grid section-xl"}>
        <SectionTitle>
          <h3>Our Services</h3>
          <p>Bravo Handyman has a complete team of professionals that can handle any project. With years of experience and expertise, you can rest assured that you will get nothing else than a well done job!</p>
        </SectionTitle>
        {data.allMarkdownRemark.edges.map((edge, index)=>{
          return(
            <CardContainer>
              <Card reverse={(index%2===0)}>
                <div className="content">
                  <header>
                    <h3>{edge.node.frontmatter.title}</h3>
                  </header>
                  <p>{edge.node.frontmatter.description}</p>
                  <p><Link to={`/services/${edge.node.fields.slug}`}>See More</Link></p>
                </div>
                <figure>
                  {data.allFile.edges.map((image, index)=>{
                      if(image.node.name === edge.node.frontmatter.name){
                        return(
                          <Img key={index} className="imgSharp"
                            fixed={image.node.childImageSharp.fixed}
                            fluid={image.node.childImageSharp.fluid}
                            alt={edge.node.frontmatter.description} />
                          // <img key={ index }src={image.node.childImageSharp.fluid.src} alt={edge.node.frontmatter.description}/>
                        )
                      }else{
                        return
                      }
                    }
                  )}
                </figure>
              </Card>
            </CardContainer>
          )
        })}
      </Container>
  )

}

export default Services