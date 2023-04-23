import { Outlet } from 'react-router-dom'
import { Container } from './styles'
import { Header } from '../../components'

export const DefaultLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  )
}
