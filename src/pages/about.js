import React from 'react'
// Components
import Layout from "../components/Layouts/"
import Head from "../components/Layouts/head"
import Hero from "../components/Hero-Page/"
import About from '../components/About'
import Footer from '../components/Footer'

const AboutPage = ()=>{
  return(
    <Layout>
      <Head title="About"/>
      <Hero title="About"/>
      <About />
      <Footer/>
    </Layout>
  )
}

export default AboutPage