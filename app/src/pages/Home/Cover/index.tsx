import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import coffeCover from '../../../assets/coffeBanner.svg'

import {
  CoverContainer,
  InfoCoverContain,
  Icon,
  DetailsContainer,
} from './styles'

export function Cover() {
  return (
    <CoverContainer>
      <InfoCoverContain>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <DetailsContainer>
          <p>
            <Icon iconColor="cart">
              <ShoppingCart weight="fill" />
            </Icon>
            Compra simples e segura
          </p>
          <p>
            <Icon iconColor="package">
              <Package weight="fill" />
            </Icon>
            Embalagem mantém o café intacto
          </p>
          <p>
            <Icon iconColor="clock">
              <Timer weight="fill" />
            </Icon>
            Entrega rápida e rastreada
          </p>
          <p>
            <Icon iconColor="coffe">
              <Coffee weight="fill" width={14} />
            </Icon>
            O café chega fresquinho até você
          </p>
        </DetailsContainer>
      </InfoCoverContain>
      <img src={coffeCover} alt="" />
    </CoverContainer>
  )
}
