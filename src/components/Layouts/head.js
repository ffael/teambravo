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
            <meta property="fb:app_id" content="394160471533518" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://test.teambravo.us" />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta property="og:image" content={'../assets/img/background.png'} />
            <meta property="og:description" content="Compre celulares, televisores, games, tablets, móveis, eletrodomésticos e muito mais aqui na Gazinshop.com.br, tudo em até 12x s/ juros. Aproveite!" />
            <meta property="og:site_name" content="gazin.com.br" />
        </Helmet>
    )
}

export default Head