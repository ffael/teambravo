import React from "react"
import Layout from "../components/Layouts/index"
import Head from "../components/Layouts/head.js"
import Hero from "../components/Hero-Page"
import { Container, FeaturedImg } from "./styles/pageStyles"
import Footer from "../components/Footer"

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
      featuredImage {
        fluid (quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default function ServiceDetail(props) {
  return (
    <Layout>
      <Head title={props.data.contentfulServices.title} />
      <Hero title={props.data.contentfulServices.title} />
      <FeaturedImg>
        <Img fluid={props.data.contentfulServices.featuredImage.fluid} />
      </FeaturedImg>
      <Container className="grid section-xl">
        <div>
          <p>{props.data.contentfulServices.description.description}</p>
        </div>
      </Container>
      <Footer />
    </Layout>
  )
}
