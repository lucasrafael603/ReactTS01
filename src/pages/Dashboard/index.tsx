import React, {useState, FormEvent, useEffect} from 'react'
import {Title, Form, Repositories, Error} from './styles'
import logoImg from '../../assets/logoApp.svg'
import {FiChevronRight} from 'react-icons/fi'
import api from '../../services/api'


/* <a href="#">
<img src='https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4' alt='Diego Fernandes' />
<div>
  <strong> RocketSeat </strong>
  <p> Easy Peasy highly scalabre ReactJS & React Native forms!</p>
</div>

<FiChevronRight size={20}/>
</a> */


interface Repository {

  full_name: string
  description: string
  owner: {
    login: string
    avatar_url: string

  }


}

const Dashboard: React.FC = () => {

  const [newRepository, setNewRepository] = useState('') //Valor do Input
  const [inputError, setInputError] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>([]) // Valores da APIs do GitHub


  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories))


  })

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void>{
    event.preventDefault() // Não deixa a pagina dar auto-reload
    //console.log(newRepository)

    if(!newRepository){

      setInputError('Digite o autor/nome do repositorio')
      return;
    }

    try{
      const response = await api.get<Repository>(`repos/${newRepository}`)

    const repository = response.data

    console.log(response.data)
    
    setRepositories([...repositories, repository])
    setNewRepository('')
    setInputError('')


    }
    catch(err){

      setInputError('Erro na busca por este repositorio')

    }
  }

  return (
    <>
    <img src={logoImg} alt='GitHub Explorer' />
    <Title> Dashboard </Title>
    <Form hasError={!!inputError} onSubmit={handleAddRepository}> 
    <input type='text' value={newRepository} onChange={ (e) => setNewRepository(e.target.value)  } placeholder='Digite o Repository aqui'/> 
    <button type='submit'> Pesquisar  </button>
    </Form>
    
    { inputError && <Error>{inputError}</Error> } // Se o InputError tiver conteudo ele criar esse componente Error

    <Repositories>

      {repositories.map((repository) => {

          return (
            <a key={repository.full_name} href="#">
                <img src={repository.owner.avatar_url} alt={repository.owner.login} />
              <div>
              <strong> {repository.full_name} </strong>
              <p> {repository.description} </p>
            </div>

            <FiChevronRight size={20}/>
             </a> 
          )

      })}


    </Repositories>

    </>
  )

}

export default Dashboard