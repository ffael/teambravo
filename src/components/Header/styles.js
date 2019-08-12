import styled from 'styled-components'

export const Container = styled.header`
  background: ${props => props.theme.ui.primary};
  height: 80px;
  box-sizing: border-box;
  display: flex;
  padding-top:10px;
  padding-bottom:10px;
  position: sticky;
  top:0;
  z-index: 9;

  nav{
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.777rem;
    display: flex;
    width: 100%;
    
    a{
      color: #fff;
      &:hover{
        text-decoration: none;
      }
    }

    h1{
      margin-bottom: 0;

      img{
        height: 100%;
      }
    }

    ul{
      margin:0 auto;
      max-width: 460px;
      display: flex;
      li{
        margin:0 10px;
        line-height:60px;
        a{
          padding: 0 20px;
          display: inline-block;
        }
      }
    }
  }

  @media (max-width:1090px){
    height: 80px;
    padding-top:5px;
    padding-bottom:5px;
    nav{
      justify-content: space-between;
      h1{
        margin-right:0;
        a{
          display:flex;
          align-items: center;
          height: 100%;
        }
        img{
          height: 75%;
          margin-bottom: 0;
        }
      }
      ul{
        display:none;
      }
    }
  }
`

export const ToggleButton = styled.button`
  font-size:1.5rem;
  color: #fff;
  outline: none;
  background: transparent;
  border:0;
  display: flex;
  align-items: center;
  padding: 0;

  @media (min-width: 1090px){
    display: none;
  }
`
export const RequestButton = styled.a`
  display: flex;
  padding: 10px 20px;
  align-self: center;
  align-items: center;
  border: 1px solid #fff;
  height: 50px;
  border-radius: 10px;
  background: transparent;
  transition: all 0.3s ease;

  @media(max-width:1090px){
    display:none;
  }
`