import styled from 'styled-components'

export const Services = styled.section`
  display: flex;
  flex-direction: column;
  background: #F9FAFC;
  justify-content: space-between;
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
`

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
`

export const Card = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;

  div{
    width: 50%;
    header{
      color: ${props=>props.theme.fonts.heading};
      font-size: 30px;
      font-weight:bold;
      display: flex;
      align-items: center;
      h3{
        margin-right: 20px;
      }
    }

    p{
      font-size: 1rem;
      color: #ABAEBE;
    }
  }


  figure{
    width: 70%;
    margin-bottom: 0;
    box-shadow: 0 0 20px 0px rgba(0,0,0,0.1);
    img{
      margin-bottom: 0;
    }
  }
`