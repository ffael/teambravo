import React from 'react'
import Layout from '../components/Layouts/index'
import Head from "../components/Layouts/head.js"
import Hero from '../components/Hero-Page'
import { Container, Content } from './styles/projectStyles'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Carousel from 'nuka-carousel'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export const query = graphql`
    query(
      $slug: String!
      ){
      markdownRemark(fields: { slug:{ eq: $slug } } ){
        frontmatter{
          service
          city
          state
          date(formatString:"YYYY-MMMM-DD")
          type
          featuredImage{
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid

              }
              fixed(width:600){
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        html
      }
    }
  `

const ProjectDetail = (props) =>{
  const featuredImage = props.data.markdownRemark.frontmatter.featuredImage.childImageSharp.fixed
  
  const carouselSettings = {
    autoplay: false,
    width: 600,
    pauseOnHover: true,
    swiping: true,
    withoutControls: false,
    wrapAround: true,
    slidesToShow: 1,
    transitionMode: "scroll",
    speed: 1000,
  }
  
  return(
    <Layout>
      <Head title="Project"/>
      <Hero title={`${props.data.markdownRemark.frontmatter.city} - ${props.data.markdownRemark.frontmatter.state}`} />
      <Container className="grid section-xl">
        <Carousel {...carouselSettings} >
            <Img fixed={featuredImage} />
            <Img fixed={featuredImage} />
            <Img fixed={featuredImage} />
            <Img fixed={featuredImage} />
        </Carousel>
        <Content>
          <header>
            <h3>{props.data.markdownRemark.frontmatter.service}</h3>
            <p>Location: {`${props.data.markdownRemark.frontmatter.city} - ${props.data.markdownRemark.frontmatter.state}`}</p>
            <p>Date: <time datetime={props.data.markdownRemark.frontmatter.date}>{props.data.markdownRemark.frontmatter.date}</time></p>
          </header>
          <div className="content" dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}} />
        </Content>
      </Container>
      <Testimonials />
      <Footer />
    </Layout>
  )
}

export default ProjectDetail