import { ShoppingCartSimple } from 'phosphor-react'

import { useCart } from '@contexts/Cart'

import { ItemQuantityControl } from '@components/ItemQuantityControl'

import {
  CartAnchor,
  CartContainer,
  CoffeeImage,
  CoffeeName,
  Container,
  Description,
  LabelItem,
  LabelList,
  Price,
  PriceContainer,
} from './CoffeeItem.styles'

interface CoffeeItemProps {
  id: string
  name: string
  description: string
  labels: string[]
  price: number
  image: string
}

export const CoffeeItem = ({
  id = '',
  name = '',
  description = '',
  labels = [],
  price = 0,
  image = '',
}: CoffeeItemProps) => {
  const { findItemById, addNewItemToTheCart, incrementItemQuantity } = useCart()

  const item = findItemById(id)
  const quantity = item?.quantity ?? 0

  const handleSetQuantity = () => {
    if (!quantity) {
      const newItem = {
        id,
        name,
        description,
        labels,
        price,
        image,
        quantity: 1,
      }

      addNewItemToTheCart(newItem)

      return
    }

    incrementItemQuantity(id)
  }

  return (
    <Container>
      <CoffeeImage src={image} alt="Café em uma linda xicara vista de cima" width={120} height={120} />

      <LabelList>
        {labels.map((label) => (
          <LabelItem key={label}>{label}</LabelItem>
        ))}
      </LabelList>

      <CoffeeName>{name}</CoffeeName>

      <Description>{description}</Description>

      <PriceContainer>
        <Price>
          R$ <strong>{price}</strong>
        </Price>

        <CartContainer>
          <ItemQuantityControl quantity={quantity} setQuantity={handleSetQuantity} />

          <CartAnchor to="/checkout" title="Ir para a tela de checkout">
            <ShoppingCartSimple size={22} weight="fill" />
          </CartAnchor>
        </CartContainer>
      </PriceContainer>
    </Container>
  )
}
