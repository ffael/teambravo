import React from "react"

// Components
import Layout from "../components/Layouts/"
import Head from "../components/Layouts/head.js"
import MainHero from "../components/Hero/"
import Services from '../components/Services'
import About from '../components/About'
import Footer from '../components/Footer'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <MainHero />
      <About mainPage/>
      <Services mainPage/>
      <Footer />
    </Layout>
  )
}

export default IndexPage
