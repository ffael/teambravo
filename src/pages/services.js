import React from 'react'
import Layout from '../components/Layouts/layout'
import Head from '../components/Layouts/head'

import { Link, graphql, useStaticQuery } from 'gatsby'

const ServicesPage = () =>{
    
    const data = useStaticQuery(graphql`
    query {
        allContentfulService(sort: {order: DESC, fields: createdAt}) {
          edges {
            node {
                id
                title
                slug
                briefDescription
                icon{
                    file{
                        url
                    }
                    title
                }
            }
          }
        }
      }
    `)

    return(
        <Layout>
            <Head title="Services"/>
            <section className="content">
                <h1>Services</h1>
                <ul>
                    {data.allContentfulService.edges.map((edge)=>{
                        return(
                            <li key={edge.node.id}>
                                <img width="30px" height="30px" src={edge.node.icon.file.url} alt={edge.node.icon.title}/>
                                <Link to={`services/${edge.node.slug}`}>{edge.node.title}</Link>
                                <p>{edge.node.briefDescription}</p>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </Layout>
    )
}

export default ServicesPage