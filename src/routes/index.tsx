import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from '../pages/Dashboard/index'
import Repository from '../pages/Repository/index'
import Estoque from '../pages/Estoque/Index'



const Routes: React.FC = () => {
//Switch garante que somente 1 rota sera exibida
//Route é usado para declaração de rota.
// Caso o exact não exista no momento de escolher a rota vai pegar a primeira rota que contem determinada path escolhida.
return (

  <Switch> 
    
    <Route path='/' exact component={Estoque} />
    <Route path='/dashboard' exact component={Dashboard} />
    <Route path='/Repository/:repository+' component={Repository} />

  </Switch>
  )
}

export default Routes