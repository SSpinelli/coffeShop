import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import ilustration from '../../assets/successIlustration.svg'
import { OrderContext } from '../../context/OrderContext'

import {
  SuccessContainer,
  MainContainer,
  TitleContainer,
  InfoOrderContainer,
  ParagraphInfo,
} from './styles'

export function Success() {
  const { paymentMethod, address } = useContext(OrderContext)
  return (
    <SuccessContainer>
      <MainContainer>
        <TitleContainer>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </TitleContainer>
        <InfoOrderContainer>
          <ParagraphInfo iconColor="purple">
            <div>
              <MapPin width={16} weight="fill" />
            </div>
            <span>
              Entrega em{' '}
              <strong>
                {address.rua}, {address.numero}
              </strong>
            </span>
            {address.bairro} - {address.cidade}, {address.uf}
          </ParagraphInfo>
          <ParagraphInfo iconColor="yellow">
            <div>
              <Timer width={16} weight="fill" />
            </div>
            Previsão de Entrega
            <span>
              <strong>20min - 30 min</strong>
            </span>
          </ParagraphInfo>
          <ParagraphInfo iconColor="yellowDark">
            <div>
              <CurrencyDollar width={16} weight="fill" />
            </div>
            Pagamento na entrega
            <span>
              <strong>{paymentMethod}</strong>
            </span>
          </ParagraphInfo>
        </InfoOrderContainer>
      </MainContainer>
      <img src={ilustration} alt="" />
    </SuccessContainer>
  )
}
