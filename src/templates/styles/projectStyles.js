import styled from 'styled-components'

export const Content = styled.div`
  padding: 0 30px;
  
  header{
    h3{
      margin: 0;
    }
    p{
      font-size: 1rem;
      font-weight: bold;
      color: #ABAEBE;
    }
  }
  p{
    color: #ABAEBE;
    font-size: 1.111rem;
  }

  @media(max-width:1090px){
    margin-top: 50px;
  }
`
export const Container = styled.section`
  display:flex;
  justify-content: center;

  @media(max-width:1090px){
    flex-direction: column;
    align-items: center;
    padding-left: 0;
    padding-right: 0;
  }
`