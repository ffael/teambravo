import styled from 'styled-components'
import Bg from '../../assets/img/background-footer.png'

export const Container = styled.section`
  background: url(${Bg}) 0 0 no-repeat;
  color: #fff;
  display: flex;
  background-size: 100% 100%;

  h4{
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
  }
  div{
    padding: 0 20px;
  }
`
export const About = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  p{
    font-size: 0.888rem;
    line-height: 1.5rem;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  ul{
    display: flex;
    flex-direction: column;
    li{
      display:flex;
      margin-bottom: 20px;
      a{
        text-decoration: none;
        color: #fff;
        font-size: 0.888rem;
      }
      div{
        padding: 0;
      }
      .icon{
        margin-right: 10px;
      }
    }
  }
`

export const Copy = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  background: #1C2139;
  color: #fff;
  font-size: 0.666rem;
  font-weight: bold;
  text-transform: uppercase;

  p{
    margin: 0 10px;
  }
  .dev{
    font-size:0.555rem;
    a{
      text-decoration: none;
      color: #fff;
    }
  }
`