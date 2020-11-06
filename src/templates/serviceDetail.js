import React from "react"
import Layout from "../components/Layouts/index"
import Head from "../components/Layouts/head.js"
import Hero from "../components/Hero-Page"
import { Container, ImageContainer } from "./styles"
import Footer from "../components/Footer"
import Carousel from "nuka-carousel"

import { graphql } from "gatsby"
import Img from "gatsby-image"

export const query = graphql`
  query($slug: String!) {
    contentfulServices(slug: { eq: $slug }) {
      title
      brief
      description {
        description
      }
      featuredImage{
        fluid(quality: 100){
          ...GatsbyContentfulFluid
        }
      }
      gallery {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default function ServiceDetail({ data }) {
  console.log(data)
  return (
    <Layout>
      <Head title={data.contentfulServices.title} />
      <Hero title={data.contentfulServices.title} />
      <Container className="grid section-xl">
        <ImageContainer>
          {data.contentfulServices.gallery.length > 1 ? (
            <Carousel
              renderCenterLeftControls={null}
              renderCenterRightControls={null}
              wrapAround
            >
              {data.contentfulServices.gallery.map(images => {
                return <Img fluid={images.fluid} />
              })}
            </Carousel>
          ) : (
            <Img fluid={data.contentfulServices.featuredImage.fluid} />
          )}
        </ImageContainer>
        <div>
          <p>{data.contentfulServices.description.description}</p>
        </div>
      </Container>
      <Footer />
    </Layout>
  )
}
