import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () =>{
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    developer{
                        name
                        url
                    }
                }
            }
        }
    `)

    return(
        <footer>
            <div className="content">
                Developed by: <a href={data.site.siteMetadata.developer.url}>{data.site.siteMetadata.developer.name}</a>
            </div>
        </footer>
    )
}

export default Footer