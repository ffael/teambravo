import React from 'react'
import Layout from '../components/Layouts/layout'
import Head from '../components/Layouts/head'
import { graphql } from 'gatsby'


export const query = graphql`
    query ($slug: String) {
        contentfulService(slug: {eq: $slug}) {
        briefDescription
        icon {
            file {
            url
            }
        }
        title
        }
    }
  
`

const ServicesTemplate = (props) => {
    return(
       <Layout>
           <Head title={props.data.contentfulService.title} />
            <section className="content">
                <div className="content" dangerouslySetInnerHTML={{__html: props.data.contentfulService.title}}>
                </div>
            </section>
       </Layout>
    )
}

export default ServicesTemplate