import { ShoppingCartSimple } from 'phosphor-react'

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

export const CoffeeItem = () => {
  return (
    <Container>
      <CoffeeImage
        src="/img/coffees/traditional-espresso.svg"
        alt="Café em uma linda xicara vista de cima"
        width={120}
        height={120}
      />

      <LabelList>
        <LabelItem>Tradicional</LabelItem>
        <LabelItem>Tradicional</LabelItem>
      </LabelList>

      <CoffeeName>Expresso Tradicional</CoffeeName>

      <Description>O tradicional café feito com água quente e grãos moídos</Description>

      <PriceContainer>
        <Price>
          R$ <strong>9,90</strong>
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
