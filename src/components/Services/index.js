import React from 'react'
import { Container, SectionTitle, CardContainer, Card } from './styles'
import { graphql, useStaticQuery, Link } from 'gatsby'

const Services = () =>{

  const image = useStaticQuery(graphql`
    query{
      allFile(filter:{
        ext:{
          eq:".jpg"
        }
      }){
        edges{
          node{
            name
            childImageSharp{
              fixed{
                src
              }
              fluid{
                src
              }
            }
          }
        }
      }
    }
  `)
  const data = useStaticQuery(graphql`
    query{
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
    }
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
                <div>
                  <header>
                    <h3>{edge.node.frontmatter.title}</h3>
                  </header>
                  <p>{edge.node.frontmatter.description}</p>
                  <p><Link to={`/services/${edge.node.fields.slug}`}>See More</Link></p>
                </div>
                <figure>
                  {image.allFile.edges.map((image, index)=>{
                      if(image.node.name === edge.node.frontmatter.name){
                        return(
                          <img key={ index }src={image.node.childImageSharp.fluid.src} alt={edge.node.frontmatter.description}/>
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