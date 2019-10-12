import React from 'react'
import Layout from '../components/Layouts/index'
import Head from "../components/Layouts/head.js"
import Hero from '../components/Hero-Page'
import { Container, FeaturedImg } from './styles/pageStyles'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export const query = graphql`
    query(
      $slug: String!
      ){
      markdownRemark(fields: { slug:{ eq: $slug } } ){
        frontmatter{
          title
          featuredImage{
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
      }
    }
  `

const Page = (props) =>{
  const featuredImage = props.data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid
  return(
    <Layout>
      <Head title={props.data.markdownRemark.frontmatter.title}/>
      <Hero title={props.data.markdownRemark.frontmatter.title} />
      <FeaturedImg>
        <Img fluid={featuredImage} />
      </FeaturedImg>
      <Container className="grid section-xl">
        <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}} />
      </Container>
      <Testimonials />
      <Footer />
    </Layout>
  )
}

export default Page