import React, {useState, FormEvent, useEffect} from 'react'
import {Title, Header, Form} from './styles'
import logoImg from '../../assets/logoApp.svg'
import {FiChevronRight} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import { size } from 'polished'
import backend from '../../services/backend'
import { allowedNodeEnvironmentFlags } from 'process'
import { stringify } from 'querystring'
import Modal from '../Modal/Modal'


/* <a href="#">
<img src='https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4' alt='Diego Fernandes' />
<div>
  <strong> RocketSeat </strong>
  <p> Easy Peasy highly scalabre ReactJS & React Native forms!</p>
</div>

<FiChevronRight size={20}/>
</a> */

interface DTOBrand{

  Id: string
  name: string

}

interface DTOProducts{

name: string
price: number

}



const Dashboard: React.FC = () => {

  const [inputNomeProduto, setInputNomeProduto] = useState('')
  const [inputMarcaProduto, setInputMarcaProduto] = useState('')
  const [inputValorProduto, setInputValorProduto] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [ idProduto , setProduto ] = useState<DTOProducts[]>(() => {

    

    const dados = localStorage.getItem('@Products')

    
    if(dados){
      console.log(dados)
      return JSON.parse(dados)

  }else {
     
      return []

  }




  })
  const [idBrand , setIdBrand]  = useState<DTOBrand[]>(() => {

        
        const dados = localStorage.getItem('@Brands')

        if(dados){
            //console.log(dados)
            return JSON.parse(dados)

        }else {
           
            return []

        }


          
      
  })


  const [inputIdProduto, setInputIdProduto] = useState('')
  const [inputQtProduto, setInputQtProduto] = useState('')


  useEffect(() => {
    async function All(){
      const dados = await backend.get('/brands')
      // .then((dados) => setIdBrand(dados.data))
        const AllBrands = dados.data

        localStorage.setItem('@Brands', JSON.stringify(dados.data))
        const storagedRepositories = localStorage.getItem('@Brands')
      // console.log( JSON.parse( storagedRepositories))
          //setProduto([...produto, JSON.parse(storagedRepositories)])
         //setIdBrand([...idBrand, dados.data]) 
         //console.log(dados.data)
         //console.log(idBrand)

         //const test = dados.data
         //const transform = JSON.stringify(test) // Transforma em JSON
         //const transfNovament = JSON.parse(transform) // convert em obj
          //console.log(transfNovament)
         
      }

      All()
 

    // const dados = backend.get('brands').then((dados) => setIdBrand(dados.data))
    // console.log(dados)
     
  }, [])

  useEffect(() => {

    async function All(){
      const dados = await backend.get('/Products')
      // .then((dados) => setIdBrand(dados.data))
        const AllBrands = dados.data

        localStorage.setItem('@Products', JSON.stringify(dados.data))
        const storagedRepositorio = localStorage.getItem('@Products')
        

      // console.log(storagedRepositorio)

         //setIdBrand([...idBrand, dados.data]) 
         //console.log(dados.data)
         //console.log(idBrand)

         //const test = dados.data
         //const transform = JSON.stringify(test) // Transforma em JSON
         //const transfNovament = JSON.parse(transform) // convert em obj
          //console.log(transfNovament)
         
      }

      All()

  }, [])


  async function Teste(event: FormEvent<HTMLFormElement>): Promise<void | undefined>{

      const dados = await backend.get('/brands')
     // console.log(dados.data)
  }


  async function handleCreateProduto(event: FormEvent<HTMLFormElement>): Promise<void>{
      event.preventDefault()
      //console.log(inputNomeProduto)
  }

  async function handleAddProduto(event: FormEvent<HTMLFormElement>): Promise<void>{
    event.preventDefault() // Não deixa a pagina dar auto-reload
    //console.log(newRepository)
    
    try{


      if(!inputNomeProduto || !inputMarcaProduto || !inputValorProduto) {

            return window.alert('Favor preencher todos os campos')
      }

      const Dados = await backend.post('/Products', {
        // name: inputNomeProduto,
        // brandId: inputMarcaProduto,
        // price: inputValorProduto


        name: inputNomeProduto,
        brandName: inputMarcaProduto, ///Verificar incompatibilidade com o campo 
        price: inputValorProduto
  
      })
  
      const newProduct = Dados.data
      console.log(newProduct)
  
      window.alert(`Produto adicionado com sucesso!`)

      
    }
    catch(err){

      window.alert(`Favor tentar novamente`)

    }


    
  
    //{ inputError && <Error>{inputError}</Error> } Se inputErro existe então faça isso


      



  }

 
   function handleProcurarUser(event: FormEvent<HTMLFormElement>): void  | undefined {
    event.preventDefault() // Não deixa a pagina dar auto-reload
    //console.log(newRepository)

    //{ inputError && <Error>{inputError}</Error> } Se inputErro existe então faça isso
    setIsModalVisible(true)

  }


  return (
    <>

      <Header>

        <div>
        <Title> (Cadastros) Controle de Estoque </Title>
        </div>
        <nav>
            <ul>
            <li><Link to={'/'}><button> Home </button></Link></li>
            <li><a><button> Sobre </button></a></li>
            <li><a><button> Serviços </button></a></li>
            <li><a><button> Serviços </button></a></li>

            </ul>

        </nav>
      </Header>
      <Form onSubmit={handleAddProduto}>

       
        <header>
          <h1> Cadastro de Tipo de Produtos </h1>
        </header>

        <div>
          <div>
        <span> Nome do Produto: </span>
        <input value={inputNomeProduto} onChange={(produto) => setInputNomeProduto(produto.target.value) } type={'text'}/>
          </div>
          <div>
        <span> Marca do Produto: </span>
        <input type={''} value={inputMarcaProduto} onChange={(marca) => setInputMarcaProduto(marca.target.value)} />
        
        <span>Lista de Marcas disponiveis: </span> 
        <select onChange={(evento) => setInputMarcaProduto(evento.target.value)}>
         <option value={''}> Selecione </option>
          
          {idBrand.map((values) => {

              return (
                   
                    <option key={values.Id} value={values.Id} > {values.name} </option>


              )

          })
           }

        </select>
        
          </div>
          <div>
        <span> Valor do Produto: </span>
        <input type={'number'} onChange={(valor) => setInputValorProduto(valor.target.value)} />
          </div>
        </div>
        <button type='submit'> Enviar </button>

      </Form>

      <br/>

      <Form >  
      <header>
        <h1> Adicionar/Retirar Produtos no Estoque </h1>
      </header>
      
      <div>
        <div>
      <span> Nome do Produto: </span>
      <input type={'text'} />
      <button onClick={() => setIsModalVisible(true)} type='button'> Consultar Produtos disponiveis </button>
      <Link to={'/'}><button> Consultar Logs de Transações  </button></Link>
        </div>
        <div>
      <span> Quantidade: </span>
      <input type={'text'} />
        </div>
      </div>
      <button type='submit'> Enviar </button>

      </Form>
      {isModalVisible ? <Modal onClose={ ()=> setIsModalVisible(false) } ><h2> Lista de Produtos disponiveis </h2> 
            <ul>
           {idProduto.map( (produto) => {

             return (  
              <>
             <li>  {produto.name} </li>
             <span> R$ {produto.price} </span>
             </>
            )
            
           })}
           </ul>
           
      </Modal> : null}


    
    
    </>
  )

}

export default Dashboard