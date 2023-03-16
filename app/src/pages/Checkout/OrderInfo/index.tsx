import { useContext } from 'react'
import { OrderContext } from '../../../context/OrderContext'
import { CoffeCheckoutCard } from './CoffeCheckoutCard'

import {
  OrderContainer,
  SubmitButton,
  PriceInfo,
  TotalInfoContainer,
} from './styles'

export function OrderInfo() {
  const { order, address, paymentMethod } = useContext(OrderContext)

  function totalPrice() {
    const total = order.reduce(
      (acc, current) => acc + Number(current.price) * current.quantity,
      0,
    )

    return total.toFixed(2)
  }

  function isSubmitDisabled() {
    // Vou precisar usar um watch para checar os campos do input.
    return !address.rua && !address.UF && !address.bairro && !paymentMethod
  }

  return (
    <OrderContainer>
      {order.map((item) => {
        return <CoffeCheckoutCard key={item.id} data={item} />
      })}
      <TotalInfoContainer>
        <PriceInfo>
          <p>
            Total de itens <span>R${totalPrice()}</span>
          </p>
          <p>
            Entrega <span>R$3,50</span>
          </p>
          <h3>
            Total <span>R${(Number(totalPrice()) + 3.5).toFixed(2)}</span>
          </h3>
        </PriceInfo>
        <SubmitButton disabled={isSubmitDisabled()} type="submit">
          CONFIRMAR PEDIDO
        </SubmitButton>
      </TotalInfoContainer>
    </OrderContainer>
  )
}
