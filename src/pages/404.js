import React from 'react'
// Components
import Layout from "../components/Layouts/"
import Head from "../components/Layouts/head"
import Hero from "../components/Hero-Page/"
import NotFound from '../components/404'
import Footer from '../components/Footer'

const NotFoundPage = ()=>{
  return(
    <Layout>
      <Head title="404"/>
      <Hero title="404 - Not Found"/>
      <NotFound />
      <Footer/>
    </Layout>
  )
}

export default NotFoundPage