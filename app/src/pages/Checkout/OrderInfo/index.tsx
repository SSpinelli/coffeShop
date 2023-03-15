import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { OrderContext } from '../../../context/OrderContext'
import { CoffeCheckoutCard } from './CoffeCheckoutCard'

import {
  OrderContainer,
  SubmitButton,
  PriceInfo,
  TotalInfoContainer,
} from './styles'

export function OrderInfo() {
  const { order } = useContext(OrderContext)
  return (
    <OrderContainer>
      {order.map((item) => {
        return <CoffeCheckoutCard key={item.id} data={item} />
      })}
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
