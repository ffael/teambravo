import React, { useContext, useState, useEffect } from 'react'
import DrawerContext from './context'
import { MdClose } from 'react-icons/md'
import { Container, BackDrop, RequestButton } from './styles'
import Menu from '../Menu'

import { FaFacebookMessenger } from 'react-icons/fa'
const Drawer = () =>{
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
        {/* {
          // Check if Drawer is open and prevent body to scroll 
          !drawer ? window.onscroll = function () { window.scrollTo(window.scrollY, 0); } : window.onscroll = function () { return } 
        } */}
        <div>
          <h4>
            Menu
          </h4>
          <button onClick={()=>{setDrawer(true); setHidden(true);}}>
            <MdClose />
          </button>
        </div>
        <ul>
          <Menu/>
          <li>
            <RequestButton href="https://m.me/bravohandyman" target="_blank">
              <FaFacebookMessenger size={20} color={'#fff'}/> 
              <span>Request Estimate</span>
            </RequestButton>
          </li>
        </ul>
        
      </Container>
      <BackDrop item={hidden} onClick={()=>{setDrawer(true); setHidden(true);}} />
    </>
  )
}

export default Drawer;