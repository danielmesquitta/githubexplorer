import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import api from '../../services/api'
import {
  Container,
  Info,
  InfoHeader,
  HeaderImg,
  HeaderView,
  HeaderName,
  HeaderDescription,
  InfoUl,
  InfoLi,
  LiCount,
  LiName,
  Issues,
  Issue,
  IssueView,
  IssueTitle,
  IssueUser,
  RightArrow,
  AllIssuesBtn,
  AllIssuesBtnText,
} from './styles'

interface Props {
  route: {
    params: {
      repoName: string
    }
  }
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

const Repository: React.FC<Props> = ({ route }) => {
  const { repoName } = route.params
  const [repo, setRepo] = useState<Repository | null>(null)
  const [issues, setIssues] = useState<Issue[]>([])

  useEffect(() => {
    api.get(`repos/${repoName}`).then(response => {
      setRepo(response.data)
    })
    api.get(`repos/${repoName}/issues?page=1&per_page=10`).then(response => {
      setIssues(response.data)
    })
  }, [repoName])

  return (
    <Container>
      {repo && (
        <Info>
          <InfoHeader>
            <HeaderImg
              source={{
                uri: repo.owner.avatar_url,
              }}
            />
            <HeaderView>
              <HeaderName>{repo.full_name}</HeaderName>
              <HeaderDescription>{repo.description}</HeaderDescription>
            </HeaderView>
          </InfoHeader>

          <InfoUl>
            <InfoLi>
              <LiCount>{repo.stargazers_count}</LiCount>
              <LiName>Stars</LiName>
            </InfoLi>

            <InfoLi>
              <LiCount>{repo.forks_count}</LiCount>
              <LiName>Forks</LiName>
            </InfoLi>

            <InfoLi>
              <LiCount>{repo.open_issues_count}</LiCount>
              <LiName>Issues abertos</LiName>
            </InfoLi>
          </InfoUl>
        </Info>
      )}

      <Issues>
        {issues.map(issue => (
          <Issue key={issue.id}>
            <IssueView>
              <IssueTitle>{issue.title}</IssueTitle>
              <IssueUser>{issue.user.login}</IssueUser>
            </IssueView>
            <RightArrow />
          </Issue>
        ))}
      </Issues>

      <AllIssuesBtn>
        <AllIssuesBtnText>Ver todos os issues</AllIssuesBtnText>
      </AllIssuesBtn>
    </Container>
  )
}

export default Repository
