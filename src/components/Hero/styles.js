import styled from 'styled-components'
import Bg from '../../assets/img/background.png'

export const Hero = styled.section`
  color: #fff;
  min-height: 300px;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${Bg}) 0 0 no-repeat;
  background-size: 100% 100%;

  div{
    max-width: 500px;
    justify-self: left;
    h1{
      font-size: 50px;
    }
  }

  @media(max-width:375px){
    height: 100vh;
  }
`

export const InfoBar = styled.section`
  background: #BD292A;
  color: #570A0A;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;

  div{
    font-size: 0.777rem;
    display: flex;
    align-items: center;

    >a{
      margin-left: 15px;
      display: block;
      background: ${props => props.theme.ui.primary};
      color: #fff;
      padding: 5px 10px;
      border-radius: 10px;
      &:hover{
        text-decoration: none;
        color:inherit;
        background: #fff;
      }
    }
  }

  ul{
    margin:0;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100px;
    li{
      margin: 0;
    }
  }

  @media(max-width:1000px){
    display:none;
  }
`