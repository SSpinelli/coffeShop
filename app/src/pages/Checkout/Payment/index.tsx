import * as RadioGroup from '@radix-ui/react-radio-group'
import { CurrencyDollar, Money, CreditCard, Bank } from 'phosphor-react'

import {
  PaymentContainer,
  TitleContainer,
  ButtonContainer,
  PaymentMethod,
} from './styles'

export function Payment() {
  return (
    <PaymentContainer>
      <TitleContainer>
        <CurrencyDollar width={22} />
        <h3>Pagamento</h3>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
      </TitleContainer>
      <RadioGroup.Root>
        <ButtonContainer>
          <PaymentMethod>
            <RadioGroup.Item value="Cartão de crédito">
              <CreditCard />
              CARTÃO DE CRÉDITO
            </RadioGroup.Item>
          </PaymentMethod>
          <PaymentMethod>
            <RadioGroup.Item value="Cartão de débito">
              <Bank />
              CARTÃO DE DÉBITO
            </RadioGroup.Item>
          </PaymentMethod>
          <PaymentMethod>
            <RadioGroup.Item value="dinheiro">
              <Money />
              DINHEIRO
            </RadioGroup.Item>
          </PaymentMethod>
        </ButtonContainer>
      </RadioGroup.Root>
    </PaymentContainer>
  )
}
