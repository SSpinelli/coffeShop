import { FormInputs } from './FormInputs'
import { OrderInfo } from './OrderInfo'
import { Payment } from './Payment'

import { FormContainer, UserInfoContainer, OrderInfoContainer } from './styles'

export function Checkout() {
  return (
    <main>
      <FormContainer action="">
        <UserInfoContainer>
          <h2>Complete seu pedido</h2>
          <FormInputs />
          <Payment />
        </UserInfoContainer>
        <OrderInfoContainer>
          <h2>Cafés selecionados</h2>
          <OrderInfo />
        </OrderInfoContainer>
      </FormContainer>
    </main>
  )
}
