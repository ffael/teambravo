import styled from 'styled-components'

export const Container = styled.section`
  background: steelblue;
  box-sizing: content-box;
  margin-top: 80px;
  margin-bottom: 160px;
`

export const Content = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);

  @media(max-width:1000px){
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width:500px){
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(1, 1fr);
  }

  div{
    display:grid;
    grid-template-rows:1;
    grid-template-columns:1;

    .backdrop,
    .figure{
      grid-row-start:  1;
      grid-column-end: 1;
      transition: opacity 0.3s ease;
    }
    a{
      text-decoration: none;
    }
    .backdrop{
      background: #000;
      opacity: 0.5;
      z-index: 3;
      display: flex;
      flex-direction: column;
      color: #fff;
      align-items: center;
      justify-content: center;
      user-select:none;
      font-size: 18px;
      h4{
        font-size: 1em;
        margin-top: 5px;
        @media(max-width:1000px){
          font-size:0.8em;
        }
        @media(max-width:375px){
          font-size:0.8em;
        }
      }

      &:hover{
        opacity:0;
      }
    }

    .figure{
      img{
        margin-bottom: 0;
        width: 100%;
        box-sizing: content-box;
      }
        overflow: hidden;
        margin-bottom: 0;
    }
  }
`