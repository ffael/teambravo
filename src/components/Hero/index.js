import React from 'react'
// Styled Components
import { Hero } from './styles'
import InfoBar from '../InfoBar'

const MainHero = () =>{
  return(
    <>
      <Hero className="grid section">
          <div>
            <h1>Bravo has a team of professionals that can take any job!
            Get to know us!</h1>
          </div>
        </Hero>
        <InfoBar />
      </>
  )
}

export default MainHero