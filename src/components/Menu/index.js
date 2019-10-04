import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

const Menu = () =>{
  const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    menu{
                        name
                        url
                    }
                }
            } 
        }
    `)

  return(
    <>
      {data.site.siteMetadata.menu.map((item, index)=>{
        return(
            <li key={index}><Link to={`${item.url}`}>{item.name}</Link></li>
        )
      })}
    </>
  )
}

export default Menu