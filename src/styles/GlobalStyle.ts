import { rgba } from 'polished'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 0.2s linear;
  }
  html, body, #__next {
    scroll-behavior: smooth; 
    overflow-x: hidden;
    width: 100vw;
    max-height: 100vh;
    background: ${props => props.theme.colors.background.dark};
    color: ${props => props.theme.colors.text.normal};
    font-family: 'Poppins', sans-serif !important;
  }


  @media (max-width: 1080px){
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px){
    html {
      font-size: 87.5%;
    }
  }


  body, input, textarea, button, select, a {
    color: inherit;
    outline: none;

    text-decoration: none;
    font: 400 1rem  Roboto, sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text.title};
  }
  button {
    cursor: pointer;
  }
  
  input[type=search] {
    -webkit-appearance: textfield;
    -webkit-box-sizing: content-box;
    font-family: inherit;
    font-size: 100%;
  }
  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button {
    display: none; 
  }

  ::-webkit-scrollbar {
    width: 6px;
    background: transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #4d4d57;
    border-radius: 50px;
  }
`
