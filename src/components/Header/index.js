import React, { useContext, useState, useEffect } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Logo from '../../assets/img/logo.png'
import DrawerContext from '../Drawer/context'
import Menu from '../Menu'
import { MdMenu } from 'react-icons/md'

// Styled Components
import { Container, RequestButton, ToggleButton } from './styles'

import {
    FaFacebookMessenger,
  } from 'react-icons/fa'


const Header = () =>{
    const [onTop, setOnTop] = useState(true);
    const {drawer, hidden, setDrawer, setHidden} = useContext(DrawerContext)

    useEffect(()=>{
        document.addEventListener('scroll', ()=>{
            const top = window.scrollY < 600;
            if(top !== onTop){
                setOnTop(top)
            }
        })
    },[onTop])

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
        <Container className={"grid mainNavTop " + (onTop ? '' :'mainNavSticky')}>
            <nav>
                <h1>
                    <Link to="/">
                        <img src={Logo} alt={data.site.siteMetadata.title}></img>
                    </Link>
                </h1>
                <ul>
                    <Menu />                
                </ul>

                <RequestButton href="https://m.me/bravohandyman" target="_blank">
                    <FaFacebookMessenger size={20} color={'#fff'}/> 
                    <span>Request Estimate</span>
                </RequestButton>

                <ToggleButton onClick={()=> {setDrawer(!drawer); setHidden(!hidden)}}>
                    <MdMenu />
                </ToggleButton>
            </nav>
        </Container>
    )
}

export default Header