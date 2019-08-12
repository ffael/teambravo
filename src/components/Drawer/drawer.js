import React, { useContext, useState, useEffect } from 'react'
import {Container, BackDrop} from './styles.js'
import DrawerContext from './context'
import { MdClose } from 'react-icons/md'

export default function Drawer(){
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
  return(
    <>
      <Container drawer={!drawer} className={ onTop ? 'mainNavTop' : 'mainNavSticky'}>
        {
          // Check if Drawer is open and prevent body to scroll 
          !drawer ? window.onscroll = function () { window.scrollTo(window.scrollY, 0); } : window.onscroll = function () { return } 
        }
        <div>
          <h4>
            Menu
          </h4>
          <button onClick={()=>{setDrawer(true); setHidden(true);}}>
            <MdClose />
          </button>
        </div>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="index.html">Services</a></li>
          <li><a href="index.html">About</a></li>
          <li><a href="index.html">Contact</a></li>
        </ul>
        
      </Container>
      <BackDrop item={hidden} onClick={()=>{setDrawer(true); setHidden(true);}} />
    </>
  )
}