import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SectionTitle = styled.div`
  width: 70%;
  justify-content: center;
  text-align: center;
  margin-bottom: 70px;
  h3{
    color:#323852;
    font-size: 3rem; 
    font-weight: bold;
    margin-bottom: 50px;
  }
  p{
    color: #ABAEBE;
    font-size: 1.2rem;
    line-height: 2.5rem;

  }

  @media (max-width: 1090px){
    width: 100%;
  }
`