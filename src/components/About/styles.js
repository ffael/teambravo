import React from 'react'
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
    font-size: 1.888rem; 
    font-weight: bold;
    margin-bottom: 10px;
  }
  p{
    color: #ABAEBE;
    font-size: 1.111rem;
  }

  @media (max-width: 1090px){
    width: 100%;
  }
`

export default () => (
    <>
    </>
)