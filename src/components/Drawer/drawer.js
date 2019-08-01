import React, { useContext } from 'react'
import {Container, BackDrop} from './styles.js'
import DrawerContext from './context'

export default function Drawer(){
  const {drawer, hidden, setDrawer, setHidden} = useContext(DrawerContext)
  return(
    <>
      <Container drawer={!drawer}>
        <ul>
          <li>Hello</li>
          <li>Something</li>
          <li>Oh Yeah</li>
        </ul>
        <button onClick={()=>{setDrawer(true); setHidden(true);}}>
          X
        </button>
      </Container>
      <BackDrop item={hidden} onClick={()=>{setDrawer(true); setHidden(true);}} />
    </>
  )
}