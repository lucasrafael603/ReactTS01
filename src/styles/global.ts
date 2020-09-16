import { createGlobalStyle } from 'styled-components'
import gitImage from '../assets/github-background.svg'
import Image from '../assets/azul-fundo-site.jpg'

//#Nome é utilizado com # para IDs do CSS
export default createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
 }
 
body{
  background: #F0F0F5 url(${Image}) no-repeat 70% top; 
  -webkit-font-smoothing: antialiased;
  font-size: 1.6rem;
}

body, input , button{

  font: 16px Roboto, sans-serif;

}

#root {

  max-width: 960px;
  margin: 0 auto;
  /*padding: 40px 20px;*/
  border: 1px solid green;

}

button {

  cursor: pointer;

}


html {

  font-size: 62.5%;


}

`