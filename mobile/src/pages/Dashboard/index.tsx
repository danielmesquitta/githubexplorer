import React, { useState } from 'react'
import { NavigationAction } from '@react-navigation/native'

import api from '../../services/api'
import {
  Container,
  Title,
  Form,
  Input,
  Error,
  Button,
  ButtonText,
  Repositories,
  Repo,
  Image,
  Info,
  Name,
  Description,
  RightArrow,
} from './styles'

interface Props {
  navigation: {
    navigate: {
      (where: string, data?: Object): NavigationAction
    }
  }
}

interface Repository {
  full_name: string
  description: string
  owner: {
    login: string
    avatar_url: string
  }
}

interface RenderItemsProps {
  id: number
  item: Repository
}

const Dashboard: React.FC<Props> = ({ navigation }) => {
  const [newRepo, setNewRepo] = useState('')

  const [repositories, setRepositories] = useState<Repository[]>([])

  const [inputError, setInputError] = useState('')

  async function handleAddRepository(): Promise<void> {
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

  const handleNavigate = (repoName: string) => {
    navigation.navigate('Repository', { repoName })
  }

  return (
    <Container>
      <Title>Dashboard</Title>
      <Form>
        <Input
          value={newRepo}
          onChangeText={setNewRepo}
          placeholder='"autor/nome" do repositório'
          hasError={!!inputError}
        />
        <Button onPress={handleAddRepository}>
          <ButtonText>Pesquisar</ButtonText>
        </Button>
      </Form>
      {!!inputError && <Error>{inputError}</Error>}
      <Repositories
        data={repositories}
        keyExtractor={(repo: Repository) => repo.full_name}
        renderItem={({ item }) => {
          return (
            <Repo onPress={() => handleNavigate(item.full_name)}>
              <Image
                source={{
                  uri: item.owner.avatar_url,
                }}
              />
              <Info>
                <Name>{item.full_name}</Name>
                <Description>{item.description}</Description>
              </Info>
              <RightArrow />
            </Repo>
          )
        }}
      />
    </Container>
  )
}

export default Dashboard
