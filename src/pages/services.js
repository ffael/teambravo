import React from 'react'
import Layout from '../components/Layouts/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

const ServicesPage = () =>{
    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            title
                            excerpt
                            type
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
        <Layout>
            <section className="content">
                <h1>Services</h1>
                <ul>
                    {data.allMarkdownRemark.edges.map((edge)=>{
                        if(edge.node.frontmatter.type === 'service'){
                            return(
                                <li>
                                    <Link to={`services/${edge.node.fields.slug}`}>{edge.node.frontmatter.title}</Link>
                                    <p>{edge.node.frontmatter.excerpt}</p>
                                </li>
                            )
                        }
                    })}
                </ul>
            </section>
        </Layout>
    )
}

export default ServicesPage