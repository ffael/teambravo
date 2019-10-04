import React from 'react'
import Layout from '../components/Layouts/index'
import Head from "../components/Layouts/head.js"
import Hero from '../components/Hero-Page'
import { Container } from './styles'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

import { graphql } from 'gatsby'

export const query = graphql`
    query(
      $slug: String!
      ){
      markdownRemark(fields: { slug:{ eq: $slug } } ){
        frontmatter{
          title
        }
        html
      }
    }
  `

const Services = (props) =>{

  return(
    <Layout>
      <Head title={props.data.markdownRemark.frontmatter.title}/>
      <Hero title={props.data.markdownRemark.frontmatter.title} />
      <Container className="grid section-xl">
        <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}} />
      </Container>
      <Testimonials />
      <Footer />
    </Layout>
  )
}

export default Services