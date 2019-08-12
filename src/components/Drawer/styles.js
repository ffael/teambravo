import styled from 'styled-components'

export const BackDrop = styled.div`
  position: absolute;
  width: 100vw;
  height: 5000px;
  background: rgba(0,0,0,0.5);
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
  padding: 20px;
  z-index: 11;
  box-shadow: 5px 0 10px rgba(0,0,0,0.4);

  transition: right 300ms ease;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.777rem;

  ul{
    margin: 0;
    li {
      margin: 0;
      border-bottom: 1px solid rgba(255,255,255,0.3);
      a{
        color:#fff;
        padding: 15px;
        display: block;
        width: 100%;
        height: 100%;
        text-transform: uppercase;
        &:hover{
          text-decoration: none;
          color: ${props=> props.theme.ui.primary};
          background: #fff
        }
      }
    }
  }

  div{
    h4{
      margin-bottom: 0;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;

    button{
      color: #fff;
      font-size: 1.5rem;
      outline: none;
      border: 0;
      background: transparent;
    }
  }

  @media (max-width:1090px){
    width: 75%;
  }
`