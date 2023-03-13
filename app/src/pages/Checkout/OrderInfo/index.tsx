import { NavLink } from 'react-router-dom'

import {
  OrderContainer,
  SubmitButton,
  PriceInfo,
  TotalInfoContainer,
} from './styles'

export function OrderInfo() {
  return (
    <OrderContainer>
      <TotalInfoContainer>
        <PriceInfo>
          <p>
            Total de itens <span>R$29,70</span>
          </p>
          <p>
            Entrega <span>R$3,50</span>
          </p>
          <h3>
            Total <span>R$33,20</span>
          </h3>
        </PriceInfo>
        <SubmitButton type="button">
          <NavLink to="/success">CONFIRMAR PEDIDO</NavLink>
        </SubmitButton>
      </TotalInfoContainer>
    </OrderContainer>
  )
}
