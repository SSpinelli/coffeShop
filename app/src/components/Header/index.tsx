import { HeaderComponent, CityAndCartContainer } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderComponent>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <CityAndCartContainer>
        <span>
          <MapPin />
          Recife, PE
        </span>
        <NavLink to="/checkout">
          <ShoppingCart size={18} weight="fill" />
        </NavLink>
      </CityAndCartContainer>
    </HeaderComponent>
  )
}
