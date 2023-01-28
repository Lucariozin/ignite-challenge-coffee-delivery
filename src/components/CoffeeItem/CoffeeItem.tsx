import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

import {
  CartButton,
  CartContainer,
  CoffeeImage,
  CoffeeName,
  Container,
  DecrementItems,
  Description,
  IncrementItems,
  ItemsAmount,
  ItemsAmountContainer,
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
          <ItemsAmountContainer>
            <DecrementItems type="button" title="Remover uma unidade do carrinho">
              <Minus size={14} weight="fill" />
            </DecrementItems>

            <ItemsAmount>1</ItemsAmount>

            <IncrementItems type="button" title="Adicionar uma unidade no carrinho">
              <Plus size={14} weight="fill" />
            </IncrementItems>
          </ItemsAmountContainer>

          <CartButton type="button" title="Ir para a tela de checkout">
            <ShoppingCartSimple size={22} weight="fill" />
          </CartButton>
        </CartContainer>
      </PriceContainer>
    </Container>
  )
}
