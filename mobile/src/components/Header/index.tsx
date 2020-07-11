import React from 'react'
import { Container, Logo, Title } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Logo />
      <Title>Github Explorer</Title>
    </Container>
  )
}

export default Header
