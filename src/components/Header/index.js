import React, { useContext, useState, useEffect } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Logo from '../../assets/img/logo.svg'
import DrawerContext from '../Drawer/context'
import { MdMenu } from 'react-icons/md'

// Styled Components
import { Container, RequestButton, ToggleButton } from './styles'


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
        <Container className={"grid " + (onTop ? 'mainNavTop':'mainNavSticky')}>
                <nav>
                    <h1><a href='index.html'><img src={Logo} alt={data.site.siteMetadata.title}></img></a></h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services/">Services</Link></li>
                        <li><Link to="/about/">About</Link></li>
                        <li><Link to="/contact/">Contact</Link></li>                        
                    </ul>

                    <RequestButton href="index.html">
                        Request Estimate
                    </RequestButton>

                    <ToggleButton onClick={()=> {setDrawer(!drawer); setHidden(!hidden)}}>
                        <MdMenu />
                    </ToggleButton>
                </nav>
        </Container>
    )
}

export default Header