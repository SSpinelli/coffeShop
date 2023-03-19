import { useContext, useEffect, useState } from 'react'
import { OrderContext } from '../../../context/OrderContext'
import { CoffeCheckoutCard } from './CoffeCheckoutCard'
import { FieldValues, UseFormWatch } from 'react-hook-form'

import {
  OrderContainer,
  SubmitButton,
  PriceInfo,
  TotalInfoContainer,
} from './styles'

interface iOrderInfo {
  watch: UseFormWatch<FieldValues>
}

export function OrderInfo({ watch }: iOrderInfo) {
  const { order, paymentMethod } = useContext(OrderContext)

  const [disableSubmit, setDisableSubmit] = useState(true)

  function totalPrice() {
    const shipping = 3.5

    let total = order.reduce(
      (acc, current) => acc + Number(current.price) * current.quantity,
      0,
    )

    total += shipping

    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  const cep = watch('cep')
  const rua = watch('rua')
  const numero = watch('numero')
  const bairro = watch('bairro')
  const cidade = watch('cidade')
  const estado = watch('uf')

  useEffect(() => {
    if (
      cep &&
      cep.length === 8 &&
      rua &&
      numero &&
      bairro &&
      cidade &&
      estado &&
      paymentMethod &&
      order.length > 0
    ) {
      setDisableSubmit(false)
    } else {
      setDisableSubmit(true)
    }
  }, [cep, rua, numero, bairro, cidade, estado, paymentMethod, order])

  useEffect(() => {
    setDisableSubmit(true)
  }, [])

  return (
    <OrderContainer>
      {order.map((item) => {
        return <CoffeCheckoutCard key={item.id} data={item} />
      })}
      <TotalInfoContainer>
        <PriceInfo>
          <p>
            Total de itens <span>{totalPrice()}</span>
          </p>
          <p>
            Entrega <span>R$3,50</span>
          </p>
          <h3>
            Total <span>{totalPrice()}</span>
          </h3>
        </PriceInfo>
        <SubmitButton disabled={disableSubmit} type="submit">
          CONFIRMAR PEDIDO
        </SubmitButton>
      </TotalInfoContainer>
    </OrderContainer>
  )
}
