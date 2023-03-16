import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import { MouseEvent, useContext, useState } from 'react'
import { OrderContext } from '../../../../context/OrderContext'

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
  const [quantity, setQuantity] = useState(0)
  const { addItemToOrder } = useContext(OrderContext)

  function handlePlusAndMinusButton(e: MouseEvent<HTMLButtonElement>) {
    if (e.currentTarget.name === 'plus') {
      setQuantity(quantity + 1)
    } else {
      quantity > 0 && setQuantity(quantity - 1)
    }
  }

  function handleSentToCartButton() {
    const newItem = {
      thumbnail,
      name,
      price,
      quantity,
      id: String(new Date().getTime()),
    }
    addItemToOrder(newItem)
    setQuantity(0)
  }

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
            <PlusAndMinusButton onClick={handlePlusAndMinusButton}>
              <Minus width={14} />
            </PlusAndMinusButton>
            <span>{quantity}</span>
            <PlusAndMinusButton name="plus" onClick={handlePlusAndMinusButton}>
              <Plus width={14} />
            </PlusAndMinusButton>
          </ButtonContainer>
          <AddToCart disabled={!quantity} onClick={handleSentToCartButton}>
            <ShoppingCart width={22} weight="fill" />
          </AddToCart>
        </Quantity>
      </PriceAndQuantity>
    </CoffeCardContainer>
  )
}
