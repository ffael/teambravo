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

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2%;
  padding-right: 2%;
  margin-bottom: 50px;

  &:last-child{
    margin-bottom: 0;
  }

  @media (max-width: 1090px){
    padding-left: 0;
    padding-right: 0;
  }
`
export const Card = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-flow: ${props => props.reverse ? 'row' : 'row-reverse'};

  .content{
    margin-right: ${props => props.reverse ? "20px" : 0 };
    margin-left: ${props => props.reverse ? 0 : "20px" };
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
    a{
      display: inline-block;
      background: #323852;
      color: #fff;
      padding: 5px 20px;
      font-size: 0.777rem;
      font-weight: bold;
      text-transform: lowercase;
      transition: all 0.3s ease;
      &:hover{
        box-shadow: 0 2px 2px 0px rgba(0,0,0,0.3);
        transform: translateY(2px);
        text-decoration: none;
      }
    }
    p{
      font-size: 1rem;
      color: #ABAEBE;
    }
  }

  figure{
    width: 100%;
    margin-bottom: 0;
    box-shadow: 0 0 20px 0px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    &:hover{
      box-shadow: 0 2px 2px 0px rgba(0,0,0,0.3);
      transform: translateY(5px);
    }
    img{
      margin-bottom: 0;
    }
    .imgSharp{
      width: 100%;
    }
  }

  @media (max-width: 1090px){
    flex-direction: column-reverse;

    div{
      width: 100%;
    }
    figure{
      width: 100%;
      margin-bottom: 20px;
    }
  }
`

export default () => (
    <>
    </>
)