import React from "react"
import Layout from "../components/Layouts/layout"
import Head from "../components/Layouts/head"
import HomeServices from "../components/Home/home-services"
import HomeTestimonials from "../components/Home/home-testimonials"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <section className="content">
        <HomeServices />
        <HomeTestimonials />
      </section>
    </Layout>
  )
}

export default IndexPage
