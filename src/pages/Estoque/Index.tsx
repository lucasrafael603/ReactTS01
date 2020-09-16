import React, {useState, FormEvent, useEffect} from 'react'
import {Header, Nav, Nav1, Section} from './styles'
import logoImg from '../../assets/logoApp.svg'
import IconeConfig from '../../assets/IconeConfig.png'
import UserIcon from '../../assets/userIcon.png'
import TransportIcon from '../../assets/transportIcon.png'

import {FiChevronRight} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import { size } from 'polished'
import backend from '../../services/backend'


/* <a href="#">
<img src='https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4' alt='Diego Fernandes' />
<div>
  <strong> RocketSeat </strong>
  <p> Easy Peasy highly scalabre ReactJS & React Native forms!</p>
</div>

<FiChevronRight size={20}/>
</a> */





const Estoque: React.FC = () => {



  async function handleAddProduto(event: FormEvent<HTMLFormElement>): Promise<void>{
      event.preventDefault()
      console.log('ajustar function')
  }

  async function handleAddUser(event: FormEvent<HTMLFormElement>): Promise<void>{
    event.preventDefault() // Não deixa a pagina dar auto-reload
    //console.log(newRepository)

    //{ inputError && <Error>{inputError}</Error> } Se inputErro existe então faça isso


      



  }

 
  async function handleProcurarUser(event: FormEvent<HTMLFormElement>): Promise<void>{
    event.preventDefault() // Não deixa a pagina dar auto-reload
    //console.log(newRepository)

    //{ inputError && <Error>{inputError}</Error> } Se inputErro existe então faça isso


  }


  return (
    <>

    <Header>
      <h1>Controle de Estoque</h1>
    </Header>
      <Nav>
     
        <ul>
            <li><a><img src={IconeConfig} /></a></li>
            <span> Consultas </span>
        </ul>
       
         <ul>
            <li><a><img src={IconeConfig} /></a></li>
            <span> Modulos </span>
         </ul>


         <ul>
            <li><a><img src={IconeConfig} /></a></li>
            <span> Serviços </span>
         </ul>


         <ul>
            <li><a><img src={IconeConfig} /></a></li>
            <span> Configurações </span>
          </ul>
        
      </Nav>


      <Section>

       
        <div>
          <img src={IconeConfig} /*style={size(50)}*//>
          <Link to={'/dashboard'}><span> Area do Usuario </span></Link>
          
        </div>

        <div>
          <img src={IconeConfig}/>
          <span> Consultas </span>
        </div>

        <div>
          <img src={IconeConfig}/>
          <span> Area do Usuario </span>
        </div>

        <div>
          <img src={IconeConfig}/>
          <span> Area do Usuario </span>
        </div>

        <div>
          <img src={IconeConfig}/>
          <span> Area do Usuario </span>
        </div>

        <div>
          <img src={IconeConfig}/>
          <span> Area do Usuario </span>
        </div>



      </Section>

    

    
    </>
  )

}

export default Estoque