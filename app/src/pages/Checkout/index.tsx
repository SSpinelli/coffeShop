import { FormInputs } from './FormInputs'
import { OrderInfo } from './OrderInfo'
import { Payment } from './Payment'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { FormContainer, UserInfoContainer, OrderInfoContainer } from './styles'
import { useContext } from 'react'
import { OrderContext } from '../../context/OrderContext'

export function Checkout() {
  const { changeAddress, eraseAllItensInOrder } = useContext(OrderContext)
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  function handleUserInfo(data: any) {
    changeAddress(data)
    eraseAllItensInOrder()
    navigate('/success')
  }

  return (
    <main>
      <FormContainer onSubmit={handleSubmit(handleUserInfo)} action="">
        <UserInfoContainer>
          <h2>Complete seu pedido</h2>
          <FormInputs register={register} />
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
