import styled from 'styled-components'

export const Container = styled.section`
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
    /* width: 80px; */
    li{
      margin: 0;
      padding: 0 5px;
    }
  }

  @media(max-width:1000px){
    display:none;
  }
`