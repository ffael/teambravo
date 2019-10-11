import React from 'react'
// Components
import Layout from "../components/Layouts/"
import Head from "../components/Layouts/head"
import Hero from "../components/Hero-Page/"
import Projects from "../components/Projects"
import Footer from '../components/Footer'


const GalleryPage = () =>{

  const title = "Projects"
  return(
    <Layout>
      <Head title={title} />
      <Hero title={title} />
      <Projects />
      <Footer />
    </Layout>
  )
}

export default GalleryPage