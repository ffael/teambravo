import React, {useState} from 'react'
import Header from '../Header'
import Drawer from '../Drawer/drawer'
import GlobalStyles from '../../styles/global'
import DrawerContext from '../Drawer/context'
import { ThemeProvider } from 'styled-components'

const Layout = ({children}) => {
    const [drawer, setDrawer] = useState({})
    const [hidden, setHidden] = useState({})

    const theme = {
        ui: {
            primary: "#570A0A",
            background: "#F9FAFC" 
        },
        fonts:{
            heading: "#323852",
            text: "#ABAEBE"
        }
    }

    return(
        
        <ThemeProvider theme={theme}>
            <DrawerContext.Provider value={{drawer, hidden, setDrawer, setHidden}}>
                <GlobalStyles />
                <Drawer />
                <Header />
                <main>
                    {children}
                </main>
            </DrawerContext.Provider>
        </ThemeProvider>
        
    )
}

export default Layout