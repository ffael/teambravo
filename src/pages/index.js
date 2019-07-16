import React from 'react'
import Layout from '../components/Layouts/layout.js'
import HomeServices from '../components/Home/home-services'
import HomeTestimonials from '../components/Home/home-testimonials'

const IndexPage = () =>{
    return(
        <Layout>
            <section className="content">
               <HomeServices />
               <HomeTestimonials />
            </section>
        </Layout>
    )
}

export default IndexPage