import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width:1090px){
    padding-left: 0;
    padding-right: 0;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #ddd;
  width: 100%;
  padding-top: calc(5% + 1rem);
  padding-bottom: calc(5% + 1rem);
  align-items: center;
  
`

export const Title = styled.header`
  text-align: center;
  margin-bottom: 20px;
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

export const TestimonialContainer = styled.section`
  .truncate{
    display: block;
    border-left: 5px solid ${props => props.theme.fonts.heading};
    padding-left: 20px;
    font-style: italic;
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
    font-size: 1.333rem;
    color: inherit;
  }
  display: flex;
  width: 100%;
  background: ${props => props.theme.ui.background};
  color:${props => props.theme.fonts.heading};
  padding: calc(3% + 1rem);
  align-items: center;
  justify-content: space-between;
  border:1px solid #eee;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.05);
  
  div{
    width:70%;
    blockquote{
      border-left: 5px solid ${props => props.theme.fonts.heading};
      padding-left: 20px;
      font-style: italic;
      margin-top: 20px;
      margin-left: 20px;
      font-size: 1.333rem;
      color: inherit;
    }
    strong{
      font-size: 1.111rem;
      justify-items: flex-end;
    }
  }
  figure{
    img{
      margin-bottom: 0;
    }
  }
  @media (max-width:1090px){
    flex-direction: column;
    flex-flow: column-reverse;
    width: 100%;
    
    div{
      width: 100%;
    }
  }
`