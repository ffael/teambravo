import React from "react"

// Components
import Layout from "../components/Layouts/"
import Head from "../components/Layouts/head.js"
import MainHero from "../components/Hero/"
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
// import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <MainHero />
      <Services />
      <Testimonials />
      {/* <Gallery /> */}
      <Footer />
    </Layout>
  )
}

export default IndexPage
