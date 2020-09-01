import React from 'react';
import Routes from '../src/routes/index'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from '../src/styles/global'


//BrownserRouter deve ser utilizado ao redor do agrupamentos das rotas 

const App: React.FC = () => {
  return (
    //<h1>Hello World</h1>
    <>
    <BrowserRouter>
    <Routes/>
    </BrowserRouter>
    <GlobalStyle/>
    </>
  )
}

export default App;
