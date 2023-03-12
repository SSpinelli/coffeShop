import { HeaderComponent, CityAndCartContainer } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderComponent>
      <img src={logo} alt="" />
      <CityAndCartContainer>
        <span>
          <MapPin />
          Recife, PE
        </span>
        <a href="">
          <ShoppingCart size={18} weight="fill" />
        </a>
      </CityAndCartContainer>
    </HeaderComponent>
  )
}
