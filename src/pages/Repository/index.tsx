import React, {useEffect, useState} from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import logoImg from '../../assets/logoApp.svg'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import {Header, RepositoryInfo, Issues} from './styles'
import api from '../../services/api'


interface RepositoryParams{

  repository: string;

}

interface Repository {

  full_name: string
  description: string
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  owner: {
    login: string
    avatar_url: string

  }
 }

 interface Issue{
  id: number
  html_url: string
  title: string
  user: {
    login: string

  }



 }



const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null >(null)
  const [issues, setIssues] = useState<Issue[]>([])


  const { params } = useRouteMatch<RepositoryParams>()



useEffect(() => {

  api.get(`repos/${params.repository}`).then(Response => setRepository(Response.data) )


  api.get(`repos/${params.repository}/issues`).then(Response => setIssues(Response.data) )

}, [params.repository])


  return (

    //<h1> Repository {params.repository} </h1>
  <>
    <Header>
      <img src={logoImg} alt='Github explorer'  />
      <Link to='/'>
        <FiChevronLeft size={16} />
        Voltar
      </Link>
    </Header>

   {repository && (

<RepositoryInfo>
<header>
  <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
  <div>
  <strong> {repository.full_name} </strong>
  <p> {repository.description} </p>
  </div>
</header>
<ul>
  <li>
   <strong>{repository.stargazers_count}</strong>
    <span> Stars </span>
  </li>
  <li>
   <strong>{repository.forks_count}</strong>
    <span> Forks </span>
  </li>
  <li>
   <strong>{repository.open_issues_count}</strong>
    <span> Issues </span>
  </li>
  
</ul>

</RepositoryInfo>



   ) }
    <Issues>
      {issues.map(issue => {
        return  (
            <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p> {issue.user.login} </p>
            </div>
    
            <FiChevronRight size={20}/>
          </a>

          )
      })}
    </Issues>

  </>

  )

}

export default Repository