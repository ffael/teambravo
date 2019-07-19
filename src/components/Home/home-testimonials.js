import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const HomeTestimonials = () =>{

    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                client
                town
                state
                type
              }
              html
              id
            }
          }
        }
      }
      
    `)

    return(
        <section>
            <h3>Testimonials</h3>
            <article>
                {data.allMarkdownRemark.edges.map(edge => {
                    if(edge.node.frontmatter.type === 'testimonial'){
                        return(
                            <article key={edge.node.id}>
                                <blockquote dangerouslySetInnerHTML={{__html: edge.node.html }}></blockquote>
                                <h3>{edge.node.frontmatter.client}</h3>
                            </article>
                        )
                    }
                })}
            </article>
        </section>
    )
}

export default HomeTestimonials