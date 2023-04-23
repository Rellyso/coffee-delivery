import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Actions, Cart, Location, Navbar } from './styles'

export default function Header() {
  return (
    <Navbar>
      <div>
        <img src="/logo.svg" alt="Coffee delivery logo" draggable={false} />
        <Actions>
          <Location>
            <MapPin size={22} weight="fill" />
            <span>Mossoró, RN</span>
          </Location>
          <Cart to="/cart">
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </Actions>
      </div>
    </Navbar>
  )
}
