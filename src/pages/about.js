import React from 'react'
import Layout from '../components/Layouts/layout'
import Head from '../components/Layouts/head'

const AboutPage = () => {
    return(
        <Layout>
            <Head title="About" />
            <section className="content">
                <h1>About Me</h1>
                <p>This is a About Me page where I will tell a little bit about my self.</p>
            </section>
        </Layout>
    )
}

export default AboutPage