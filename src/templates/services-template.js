import React from 'react'
import Layout from '../components/Layouts/layout'
import { graphql } from 'gatsby'


export const query = graphql`
    query( $slug: String! ){
        markdownRemark(
            fields:{
                slug:{
                    eq: $slug
                }
            }
        ){
            frontmatter{
                title
            }
            html
            htmlAst
        }
    }
`

const ServicesTemplate = (props) => {
    return(
       <Layout>
            <section className="content">
                <div className="content" dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}>
                </div>
            </section>
       </Layout>
    )
}

export default ServicesTemplate