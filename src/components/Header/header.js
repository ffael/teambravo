import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Logo from '../../assets/img/logo.svg'

import HeaderStyles from './styles.module.scss'

const Header = () =>{

    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
            
        }
    `)

    return(
        <header className={HeaderStyles.header}>
            <section className={`${HeaderStyles.headerContent} content`}>
                <h1><img src={Logo} alt={data.site.siteMetadata.title}></img></h1>
                <nav className={HeaderStyles.mainNav}>
                    <ul>
                        <li><Link to="/" activeClassName={HeaderStyles.activeNav}>Home</Link></li>
                        <li><Link to="/services" activeClassName={HeaderStyles.activeNav}>Services</Link></li>
                        <li><Link to="/about" activeClassName={HeaderStyles.activeNav}>About</Link></li>
                        <li><Link to="/contact" activeClassName={HeaderStyles.activeNav}>Contact</Link></li>
                    </ul>
                </nav>
                <Link to="/" className={HeaderStyles.requestBtn}>Request Estimate</Link>
            </section>

            <section className={HeaderStyles.hero}>
                <div className={`${HeaderStyles.content} content`}>
                    <h1>Hello</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non metus auctor fringilla.</p>
                </div>
            </section>
            
        </header>
    )
}

export default Header