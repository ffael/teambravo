import React from 'react'
import { Helmet } from 'react-helmet'
import {graphql, useStaticQuery } from 'gatsby'

const Head = ({title}) =>{
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
        `)
    return (
        <Helmet>
            <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        </Helmet>
    )
}

export default Head