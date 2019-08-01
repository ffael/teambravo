import React, { useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Logo from '../../assets/img/logo.svg'
import DrawerContext from '../Drawer/context'

import { Container , ToggleButton} from './styles.js'
import { MdReorder } from 'react-icons/md'

export default function Header(){
    const {drawer, hidden, setDrawer, setHidden} = useContext(DrawerContext)
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
        <Container className="grid">
                <nav>
                    <h1><a href='#'><img src={Logo} alt={data.site.siteMetadata.title}></img></a></h1>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <ToggleButton onClick={()=> {setDrawer(!drawer); setHidden(!hidden)}}>
                        <MdReorder />
                    </ToggleButton>
                </nav>
        </Container>
    )
}