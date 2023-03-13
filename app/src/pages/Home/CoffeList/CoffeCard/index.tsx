import { ShoppingCart, Plus, Minus } from 'phosphor-react'

import {
  CoffeCardContainer,
  Tag,
  CoffeDescription,
  PriceAndQuantity,
  Quantity,
  ButtonContainer,
  PlusAndMinusButton,
  AddToCart,
  TagContainer,
} from './styles'

interface CoffeCardProps {
  data: {
    tags: string[]
    name: string
    description: string
    thumbnail: string
    price: string
  }
}

export function CoffeCard({
  data: { tags, name, description, thumbnail, price },
}: CoffeCardProps) {
  return (
    <CoffeCardContainer>
      <img src={thumbnail} alt="" />
      <TagContainer>
        {tags.map((tag) => {
          return <Tag key={tag}>{tag}</Tag>
        })}
      </TagContainer>
      <h3>{name}</h3>
      <CoffeDescription>{description}</CoffeDescription>
      <PriceAndQuantity>
        <p>
          <span>R$</span>
          {price}
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
