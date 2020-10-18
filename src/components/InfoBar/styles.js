import styled from 'styled-components'

export const Container = styled.section`
  background: #BD292A;
  color: #570A0A;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;


  div{
    font-size: 0.777rem;
    display: flex;
    align-items: center;

    >a{
      margin-left: 15px;
      display: block;
      background: ${props => props.theme.ui.primary};
      color: #fff;
      padding: 5px 40px;
      border-radius: 10px;
      font-size: 1rem;
      font-weight: bold;
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
      svg{
        transition: all 0.3s ease-in;
      }
      &:hover svg{
        fill: #fff;
      }
    }
  }

  @media(max-width:1000px){
    padding: 20px 0;
    flex-direction: column;
    height: 15%;
    .phone--number{
      font-size: 1.5rem;
      font-weight: bold;
    }
    ul{
      li{
        margin: 10px 0;
        svg{
          width: 40px;
          height: 40px;
        }
      }
    }
    /* display:none; */
  }
`