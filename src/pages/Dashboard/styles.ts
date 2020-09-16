import styled, {css} from 'styled-components'
import {shade} from 'polished'

//Neste caso do CSS do input só vai ser aplicado no input que esta dentro do form
//Exemplo do CSS normal: form input {}

//button:hover {}
//Dentro do button utilizar &:hover



export const Header = styled.header`

  max-width: 960px;
  color: #FFF;
  background-color: #658BD7;
  margin: 0 auto;
  display: flex;
  justify-content:space-between;

  div{
    
    display: flex;
    justify-content:center;
    margin: auto;
    border: 1px solid white;

  }


 nav{

  

 }

  li{

        display: inline;
        margin-right: 1.6rem;
        margin-left: auto;


  }


`


export const Title = styled.h1`
font-size: 3.0rem;
color: #3a3a3a;
border: 1px solid red;
max-width: 460px;
line-height: 3.0rem;





`


export const Form = styled.form`
box-sizing: border-box;
display: flex;
flex-direction: column;
align-content: center;
flex-wrap: wrap;
max-width: 800px;
width: 90%;
margin: 0 auto;


input, span{
    
    margin: 2px 3px 3px 2px;
    max-width: 50%;

}

header {

 margin: 0 auto;

}

div {

box-sizing: border-box;
display: flex;
flex-direction: column;
align-content: center;
flex-wrap: wrap;
max-width: 800px;
width: 90%;
margin: 0 auto;
background-color: #FFF;
margin: 2px 3px 3px 2px;
}

div div{

  border: 7px solid black;
  background-color: #A9A9A9 ;

}

.teste{

  background-color: black;

}

`
