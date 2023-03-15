import { Plus, Minus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../../../context/OrderContext'
import { iOrder } from '../../../../reducer/reducer'
import {
  CoffeCheckouCardContainer,
  MainInfoCard,
  QuantityInfo,
  ButtonContainer,
  PlusAndMinusButton,
  PlusAndMinusContainer,
  RemoveButton,
  Price,
} from './styles'

interface iCheckoutCard {
  data: iOrder
}

export function CoffeCheckoutCard({ data }: iCheckoutCard) {
  const { removeItemFromOrder, decreaseQtdOfItem, increaseQtdOfItem } =
    useContext(OrderContext)

  function handleRemoveButton() {
    removeItemFromOrder(data.id)
  }

  function handleMinusButton() {
    if (data.quantity > 1) {
      decreaseQtdOfItem(data.id)
    }
  }

  function handlePlusButton() {
    increaseQtdOfItem(data.id)
  }

  return (
    <CoffeCheckouCardContainer>
      <MainInfoCard>
        <img src={data.thumbnail} alt="" />
        <QuantityInfo>
          <h2>{data.name}</h2>
          <ButtonContainer>
            <PlusAndMinusContainer>
              <PlusAndMinusButton onClick={handlePlusButton} type="button">
                <Plus width={14} />
              </PlusAndMinusButton>
              <span>{data.quantity}</span>
              <PlusAndMinusButton onClick={handleMinusButton} type="button">
                <Minus width={14} />
              </PlusAndMinusButton>
            </PlusAndMinusContainer>
            <RemoveButton onClick={handleRemoveButton} type="button">
              <Trash width={16} />
              REMOVER
            </RemoveButton>
          </ButtonContainer>
        </QuantityInfo>
        <Price>
          <span>R$</span>
          {(Number(data.price) * data.quantity).toFixed(2)}
        </Price>
      </MainInfoCard>
    </CoffeCheckouCardContainer>
  )
}
