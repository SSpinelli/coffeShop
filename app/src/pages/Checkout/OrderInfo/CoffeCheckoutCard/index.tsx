import { Plus, Minus, Trash } from 'phosphor-react'
import expresso from '../../../../assets/Coffee/expresso.svg'
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

export function CoffeCheckoutCard() {
  return (
    <CoffeCheckouCardContainer>
      <MainInfoCard>
        <img src={expresso} alt="" />
        <QuantityInfo>
          <h2>Expresso Tradicional</h2>
          <ButtonContainer>
            <PlusAndMinusContainer>
              <PlusAndMinusButton type="button">
                <Plus width={14} />
              </PlusAndMinusButton>
              <span>1</span>
              <PlusAndMinusButton type="button">
                <Minus width={14} />
              </PlusAndMinusButton>
            </PlusAndMinusContainer>
            <RemoveButton type="button">
              <Trash width={16} />
              REMOVER
            </RemoveButton>
          </ButtonContainer>
        </QuantityInfo>
        <Price>
          <span>R$</span>9,90
        </Price>
      </MainInfoCard>
    </CoffeCheckouCardContainer>
  )
}
