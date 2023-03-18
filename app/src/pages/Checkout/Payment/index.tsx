import * as RadioGroup from '@radix-ui/react-radio-group'
import { CurrencyDollar, Money, CreditCard, Bank } from 'phosphor-react'
import { MouseEvent, useContext, useEffect } from 'react'
import { OrderContext } from '../../../context/OrderContext'

import {
  PaymentContainer,
  TitleContainer,
  ButtonContainer,
  PaymentMethod,
} from './styles'

export function Payment() {
  const { changePaymentMethod } = useContext(OrderContext)

  function handlePaymentMethod(e: MouseEvent<HTMLButtonElement>) {
    changePaymentMethod(e.currentTarget.value)
  }

  useEffect(() => {
    changePaymentMethod('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
            <RadioGroup.Item
              onClick={handlePaymentMethod}
              value="Cartão de Crédito"
            >
              <CreditCard />
              CARTÃO DE CRÉDITO
            </RadioGroup.Item>
          </PaymentMethod>
          <PaymentMethod>
            <RadioGroup.Item
              onClick={handlePaymentMethod}
              value="Cartão de Débito"
            >
              <Bank />
              CARTÃO DE DÉBITO
            </RadioGroup.Item>
          </PaymentMethod>
          <PaymentMethod>
            <RadioGroup.Item onClick={handlePaymentMethod} value="Dinheiro">
              <Money />
              DINHEIRO
            </RadioGroup.Item>
          </PaymentMethod>
        </ButtonContainer>
      </RadioGroup.Root>
    </PaymentContainer>
  )
}
