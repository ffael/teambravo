import React from 'react'
import Layout from '../components/Layouts/layout'
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
            <section className="content">
                <div className="content" dangerouslySetInnerHTML={{__html: props.data.contentfulService.title}}>
                </div>
            </section>
       </Layout>
    )
}

export default ServicesTemplate