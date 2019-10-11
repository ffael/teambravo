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