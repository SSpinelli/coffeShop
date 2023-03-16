import {
  HeaderComponent,
  CityAndCartContainer,
  QuantityInCart,
  CityAndUF,
} from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { useContext } from 'react'
import { OrderContext } from '../../context/OrderContext'

export function Header() {
  const { order } = useContext(OrderContext)
  return (
    <HeaderComponent>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <CityAndCartContainer>
        <CityAndUF>
          <MapPin weight="fill" />
          Recife, PE
        </CityAndUF>
        <NavLink to="/checkout">
          {order.length ? (
            <QuantityInCart>{order.length}</QuantityInCart>
          ) : null}
          <ShoppingCart size={18} weight="fill" />
        </NavLink>
      </CityAndCartContainer>
    </HeaderComponent>
  )
}
