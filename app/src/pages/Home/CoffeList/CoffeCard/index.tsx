import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import expresso from '../../../../assets/Coffee/expresso.svg'

import {
  CoffeCardContainer,
  Tag,
  CoffeDescription,
  PriceAndQuantity,
  Quantity,
  ButtonContainer,
  PlusAndMinusButton,
  AddToCart,
} from './styles'

export function CoffeCard() {
  return (
    <CoffeCardContainer>
      <img src={expresso} alt="" />
      <Tag>TRADICIONAL</Tag>
      <h3>Expresso Tradicional</h3>
      <CoffeDescription>
        O tradicional café feito com água quente e grãos moídos
      </CoffeDescription>
      <PriceAndQuantity>
        <p>
          <span>R$</span>9,90
        </p>
        <Quantity>
          <ButtonContainer>
            <PlusAndMinusButton>
              <Minus width={14} />
            </PlusAndMinusButton>
            <span>1</span>
            <PlusAndMinusButton>
              <Plus width={14} />
            </PlusAndMinusButton>
          </ButtonContainer>
          <AddToCart>
            <ShoppingCart width={22} weight="fill" />
          </AddToCart>
        </Quantity>
      </PriceAndQuantity>
    </CoffeCardContainer>
  )
}
