import { createGlobalStyle } from 'styled-components'
import background from '../assets/background.svg'

export default createGlobalStyle`
  /*Default*/
  *,
  *::after,
  *::before{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root{
    min-height: 100%;
  }
  body{
    background: #fafafa url(${background}) no-repeat 70% top;
    /*background-size: cover;*/
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button{
    font-family: 'Roboto', Arial, Helvetica, sans-serif; 
    font-size: 16px;
  }
  button{
    cursor: pointer;
  }
  a{
    text-decoration: none;
    cursor: pointer;
  }
  ul{
    list-style: none;
  }

  /*This projects*/
  #root{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }  
`
