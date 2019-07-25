import React from 'react'
import HeroStyles from './styles.module.scss'

const Hero = () => {
    return (
        <section className={HeroStyles.hero}>
            <div className={`${HeroStyles.content} content`}>
                <h1>Hello</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non metus auctor fringilla.</p>
            </div>
        </section>
    )
}

export default Hero