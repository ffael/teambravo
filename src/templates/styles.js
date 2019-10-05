import styled from 'styled-components'

export const Container = styled.section`
  display:flex;
  justify-content: center;
  div{
    width: 70%;
    p{
      color: #ABAEBE;
      font-size: 1.111rem;
    }
  }
  
  @media(max-width:1090px){
    padding-left: 0;
    padding-right: 0;
  }
`