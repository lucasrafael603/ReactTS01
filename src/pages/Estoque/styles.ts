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
  flex-direction: column;
  align-items: center;
  `


export const Nav = styled.nav`
    
    display:flex;
    flex-direction: row;
     align-items: flex-end ;  
    justify-items: flex-end; 
     justify-content: flex-end; 
    margin: auto;
    margin-right: 25%;
    
    
    


    img{

width: 50%;
background-color: #FFF;
border: 2px solid black;
margin: 0;



}


ul{

 
  max-width: 100px;
  margin: 0 25px;


}

li{

  margin-left: 10px;

}



ul,li, a, img{

  margin-top: 0.5rem;
  /* display:flex;
  flex-direction: row;
  align-items: flex-end ; 
  justify-items: flex-end;
  justify-content: flex-end;
  border: 1px solid red;
  
 
  */
 /* margin: auto; */
 list-style: none;
 margin-right:0px;

}


/* ul + ul{

  background-color: #FFF;

} */


span {

  display:block;


}


`

export const Section = styled.section`

display: flex;
flex-direction: row;
justify-content: center;
margin: 0 auto;
margin-top: 1.5%;
max-width: 80.0rem;
flex-wrap: wrap;
border: 1px solid red;


link, a{

  list-style: none;
  outline-style: none;

}


div{


  background-color: #FFF;
  margin: 1.0% 0.5% 1.0% 0.5%;

}



img {

    width: 65%

}

svg{

  width: 65%

}




span{

 margin: 0 auto;
 display:block;
 margin-left: 12.5%;
 font-style: italic;
 font-weight: bold;
 line-height: 2.5rem;
}


`




 




  /*li{

    display: flex;
    justify-content: start;
    display: inline;
    
  }


 span{

  display: inline;

 }*/

 export const Nav1 = styled.nav`
 
    display:flex;
    flex-direction: column;
    border: 1px solid red;


    img{

      width: 10%;
      background-color: #FFF;
      border: 2px solid black;



}




ul,li, a{

margin-top: 0.5rem;
/* display:flex;
flex-direction: row;
align-items: flex-end ; 
justify-items: flex-end;
justify-content: flex-end;
border: 1px solid red;


*/
/* margin: auto; */
list-style: none;
display: block;


}

 
 `





 

