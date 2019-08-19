import styled from 'styled-components'

export const Container = styled.section`
  display:flex;
  align-items: center;
  background: steelblue;
  width: 100%;
`

export const Content = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 200px);
  grid-template-columns: repeat(5, 1fr);
  grid-gap:2px;

  article{
    grid-row-start:1;
    grid-row-end:3;
    margin-right: 20px;
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
      h4{
        font-size: 20px;
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