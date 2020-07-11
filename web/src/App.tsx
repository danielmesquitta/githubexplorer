import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import GobalStyles from './styles/global'

import Routes from './routes'

const App: React.FC = () => (
  <>
  <GobalStyles />
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
  </>
)

export default App
