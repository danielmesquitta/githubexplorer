import React, { useEffect, useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import logo from '../../assets/logo.svg'
import { Header, Info, Issues, AllIssuesBtn } from './styles'
import api from '../../services/api'

interface RepositoryParams {
  repository: string
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

interface Issue {
  id: number
  title: string
  html_url: string
  user: {
    login: string
  }
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>()
  const [repo, setRepo] = useState<Repository | null>(null)
  const [issues, setIssues] = useState<Issue[]>([])

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      setRepo(response.data)
    })
    api.get(`repos/${params.repository}/issues`).then(response => {
      setIssues(response.data)
    })
  }, [params.repository])

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explore" />
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </Header>

      {repo && (
        <Info>
          <header>
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <b>{repo.full_name}</b>
              <p>{repo.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <b>{repo.stargazers_count}</b>
              <span>Stars</span>
            </li>

            <li>
              <b>{repo.forks_count}</b>
              <span>Forks</span>
            </li>

            <li>
              <b>{repo.open_issues_count}</b>
              <span>Issues abertos</span>
            </li>
          </ul>
        </Info>
      )}

      {issues.map(issue => (
        <Issues>
          <a href={issue.html_url} key={issue.id} target="_blank">
            <div>
              <b>{issue.title}</b>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        </Issues>
      ))}

      {repo && issues.length && (
        <AllIssuesBtn
          href={`https://github.com/${repo.full_name}/issues`}
          target="_blank"
        >
          Ver todos os issues
        </AllIssuesBtn>
      )}
    </>
  )
}

export default Repository
