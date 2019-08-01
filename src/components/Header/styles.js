import styled from 'styled-components'

export const Container = styled.header`
  background: ${props => props.theme.ui.primary};
  height: 80px;
  box-sizing: content-box;
  display: flex;
  padding-top:10px;
  padding-bottom:10px;

  justify-content:space-between;
  align-items: center;

  nav{
    line-height:80px;
    display: flex;
    max-height: 100%;
    justify-content: space-between;
    width: 100%;
    
    a{
      color: #fff;
      &:hover{
        text-decoration: none;
      }
    }

    h1{
      margin-bottom: 0;
      margin-right: 10px;
    }

    ul{
      margin-bottom: 0;
      display: flex;
      justify-content: space-between;
      width: 600px;
    }
  }

  @media (max-width:376px){
    height: 60px;
    padding-top:5px;
    padding-bottom:5px;

    nav{
      line-height:60px;
      display: flex;
      max-height: 100%;
      justify-content: space-between;
      width: 100%;
      h1{
        margin-right:0;
        a{
          display:flex;
          align-items: center;
          height: 100%;
        }
        img{
          height: 90%;
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

  @media (min-width: 376px){
    display: none;
  }
`