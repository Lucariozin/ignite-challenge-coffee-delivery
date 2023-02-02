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
  name: string
  description: string
  labels: string[]
  price: number
  image: string
}

export const CoffeeItem = ({ name = '', description = '', labels = [], price = 0, image = '' }: CoffeeItemProps) => {
  const { addNewItemToTheCart } = useCart()

  addNewItemToTheCart()

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
          <ItemQuantityControl quantity={1} setQuantity={() => {}} />

          <CartAnchor to="/checkout" title="Ir para a tela de checkout">
            <ShoppingCartSimple size={22} weight="fill" />
          </CartAnchor>
        </CartContainer>
      </PriceContainer>
    </Container>
  )
}
