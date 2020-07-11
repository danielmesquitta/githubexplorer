import React, { useState } from 'react'
import { NavigationAction } from '@react-navigation/native'

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
      (where: string, data?: string): NavigationAction
    }
  }
}

const Dashboard: React.FC<Props> = ({ navigation }) => {
  const [inputError, setInputError] = useState('')

  const handleAddRepository = () => {}

  const handleNavigate = () => {
    navigation.navigate('Repository')
  }

  return (
    <Container>
      <Title>Dashboard</Title>
      <Form>
        <Input
          placeholder='"autor/nome" do repositório'
          hasError={!!inputError}
        />
        <Button>
          <ButtonText>Pesquisar</ButtonText>
        </Button>
      </Form>
      {!!inputError && <Error>{inputError}</Error>}
      <Repositories>
        <Repo onPress={handleNavigate}>
          <Image
            source={{
              uri: 'https://avatars1.githubusercontent.com/u/60039311?s=48&v=4',
            }}
          />
          <Info>
            <Name>autor/nome</Name>
            <Description>descrição</Description>
          </Info>
          <RightArrow />
        </Repo>
      </Repositories>
    </Container>
  )
}

export default Dashboard
