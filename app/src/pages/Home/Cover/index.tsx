import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import coffeCover from '../../../assets/coffeBanner.svg'

import {
  CoverContainer,
  InfoCoverContain,
  Icon,
  DetailsContainer,
  BluredAreas,
} from './styles'

export function Cover() {
  return (
    <CoverContainer>
      <BluredAreas top={'350px'} left={'-150px'} blurColor="purpleBlur" />
      <BluredAreas top={'350px'} left={'100px'} blurColor="yellowBlur" />
      <BluredAreas top={'150px'} left={'-150px'} blurColor="yellowBlur" />
      <BluredAreas top={'150px'} left={'300px'} blurColor="purpleBlur" />
      <BluredAreas top={'400px'} left={'440px'} blurColor="yellowBlur" />
      <BluredAreas top={'400px'} left={'640px'} blurColor="purpleBlur" />
      <BluredAreas top={'100px'} left={'640px'} blurColor="yellowBlur" />
      <BluredAreas top={'400px'} left={'1040px'} blurColor="yellowBlur" />
      <BluredAreas top={'100px'} left={'940px'} blurColor="yellowBlur" />
      <BluredAreas top={'300px'} left={'1240px'} blurColor="yellowBlur" />
      <BluredAreas top={'100px'} left={'1040px'} blurColor="purpleBlur" />
      <BluredAreas top={'100px'} left={'1240px'} blurColor="purpleBlur" />
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
