import React from 'react'
import Header from '../Header/header.js'
import Hero from '../Hero/hero.js'
import Footer from '../Footer/footer.js'
import LayoutStyles from './styles.module.scss'

import '../../styles/index.scss'
import '../../styles/main.scss'

const Layout = ({children}) => {
    return(
        <div className={LayoutStyles.wrapper}>
            <Header />
            <main className={LayoutStyles.content}>
            <Hero />
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout