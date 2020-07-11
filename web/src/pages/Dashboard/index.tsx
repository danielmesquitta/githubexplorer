import React, { useState, useEffect, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

import api from '../../services/api'
import { Title, Form, Repositories, Error } from './styles'
import logo from '../../assets/logo.svg'

interface Repository {
  full_name: string
  description: string
  owner: {
    login: string
    avatar_url: string
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('')

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepos = localStorage.getItem('@GithubExplorer:repositories')
    if (storagedRepos) {
      return JSON.parse(storagedRepos)
    }
    return []
  })

  const [inputError, setInputError] = useState('')

  async function handleAddRepository(
    e: FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault()
    if (!newRepo) {
      setInputError('Digite "autor/nome" de um repositório')
      return
    }
    try {
      const response = await api.get<Repository>(`repos/${newRepo}`)
      const repository = response.data
      setRepositories([...repositories, repository])
      setNewRepo('')
      setInputError('')
    } catch (err) {
      setInputError(
        'Repositório não encontrado, verifique os dados e tente novamente'
      )
    }
  }

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories)
    )
  }, [repositories])

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Dashboard</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          placeholder='Digite "autor/nome" de um repositório'
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map(repo => (
          <Link to={`/repositories/${repo.full_name}`} key={repo.full_name}>
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <b>{repo.full_name}</b>
              <p>{repo.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard
