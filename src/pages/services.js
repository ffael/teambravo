import React from 'react'
// Components
import Layout from "../components/Layouts/"
import Head from "../components/Layouts/head.js"
import Hero from "../components/Hero-Page/"
import Services from '../components/Services'
import Footer from '../components/Footer'

const ServicePage = () =>{
  return(
    <Layout>
      <Head title="Services"/>
      <Hero title="Services"/>
      <Services />
      <Footer/>
    </Layout>
  )
}

export default ServicePage