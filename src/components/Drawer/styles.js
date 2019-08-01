import styled from 'styled-components'

export const BackDrop = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.15);
  z-index: 10;
  left: ${props => props.item ? '-100%' : '0'};

  &:hover{
    cursor: pointer;
  }
`
export const Container = styled.nav`
  color: #fff;
  background: ${props => props.theme.ui.primary};
  position: fixed;
  top: 0;
  right: ${props => props.drawer ? '0' : '-100%'};
  width: 20%;
  height: 100vh;
  padding: 20px 0;
  z-index: 11;
  box-shadow: 5px 0 10px rgba(0,0,0,0.4);

  transition: right 300ms ease;

  @media (max-width:375px){
    width: 75%;
  }
`