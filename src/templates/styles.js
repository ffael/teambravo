import styled from "styled-components"

export const FeaturedImg = styled.section`
  max-height: 500px;
  overflow: hidden;
`

export const Container = styled.section`
  display: flex;
  @media(max-width: 900px){
    flex-direction: column;
    padding-top: 0;

    p{
      margin-top: 80px;
      padding: 0 50px;
    }
  }
  div{
    width: 100%;
  }
  p {
    color: #abaebe;
    font-size: 1.111rem;
  }

  @media (max-width: 1090px) {
    padding-left: 0;
    padding-right: 0;
  }
`

export const ImageContainer = styled.div`
  margin-right: 40px;
  width: 100%;
`
