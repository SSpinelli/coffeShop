/* eslint-disable prettier/prettier */
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
  const { order, address } = useContext(OrderContext)
  return (
    <HeaderComponent>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <CityAndCartContainer>
        <CityAndUF>
          <MapPin weight="fill" />
          {`${address.cidade.length ? address.cidade : 'Onde você está?'} - ${address.uf.length ? address.uf : 'XX'}`}
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
