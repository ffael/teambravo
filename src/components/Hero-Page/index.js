import React from 'react'
// Styled Components
import { Hero } from './styles'
import InfoBar from '../InfoBar'


const MainHero = (props) =>{
  return(
    <>
      <Hero className="grid section">
          <div>
            <h1>{props.title}</h1>
          </div>
        </Hero>
        <InfoBar />
      </>
  )
}

export default MainHero