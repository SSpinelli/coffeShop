import {
  PaymentContainer,
  TitleContainer,
  ButtonContainer,
  PaymentButton,
} from './styles'
import { CurrencyDollar, Money, CreditCard, Bank } from 'phosphor-react'

export function Payment() {
  return (
    <PaymentContainer>
      <TitleContainer>
        <CurrencyDollar width={22} />
        <h3>Pagamento</h3>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
      </TitleContainer>
      <ButtonContainer>
        <PaymentButton type="button">
          <CreditCard />
          CARTÃO DE CRÉDITO
        </PaymentButton>
        <PaymentButton type="button">
          <Bank />
          CARTÃO DE DÉBITO
        </PaymentButton>
        <PaymentButton type="button">
          <Money />
          DINHEIRO
        </PaymentButton>
      </ButtonContainer>
    </PaymentContainer>
  )
}
