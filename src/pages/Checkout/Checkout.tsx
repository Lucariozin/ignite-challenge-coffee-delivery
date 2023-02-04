import { useNavigate } from 'react-router-dom'

import { Trash } from 'phosphor-react'

import { useCart } from '@contexts/Cart'

import { ItemQuantityControl } from '@components/ItemQuantityControl'

import { DeliveryInformation } from './components/DeliveryInformation'
import { PaymentInformation } from './components/PaymentInformation'

import {
  Actions,
  ActionsContainer,
  CartItem,
  CartItemsList,
  ConfirmOrderButton,
  ConfirmOrderContainer,
  Container,
  ItemImage,
  ItemName,
  ItemPrice,
  LeftColumn,
  OrderSummaryContainer,
  OrderTitle,
  RemoveItemButton,
  RightColumn,
  SelectedCoffeesTitle,
  SummaryPrice,
  SummaryRow,
  SummaryText,
  SummaryTotalContainer,
  SummaryTotalPrice,
  SummaryTotalText,
} from './Checkout.styles'
import { useEffect } from 'react'

export const Checkout = () => {
  const { items } = useCart()

  const navigate = useNavigate()

  useEffect(() => {
    if (!items.length) navigate('/')
  }, [items.length, navigate])

  return (
    <Container>
      <LeftColumn>
        <OrderTitle>Complete seu pedido</OrderTitle>

        <DeliveryInformation />

        <PaymentInformation />
      </LeftColumn>

      <RightColumn>
        <SelectedCoffeesTitle>Cafés selecionados</SelectedCoffeesTitle>

        <ConfirmOrderContainer>
          <CartItemsList>
            <CartItem>
              <ItemImage
                src="/img/coffees/traditional-espresso.svg"
                alt="Café em uma linda xicara vista de cima"
                width={64}
                height={64}
              />

              <ActionsContainer>
                <ItemName>Expresso Tradicional</ItemName>

                <Actions>
                  <ItemQuantityControl quantity={1} setQuantity={() => {}} />

                  <RemoveItemButton>
                    <Trash size={18} />
                    REMOVER
                  </RemoveItemButton>
                </Actions>
              </ActionsContainer>

              <ItemPrice>R$ 9,90</ItemPrice>
            </CartItem>

            <CartItem>
              <ItemImage
                src="/img/coffees/traditional-espresso.svg"
                alt="Café em uma linda xicara vista de cima"
                width={64}
                height={64}
              />

              <ActionsContainer>
                <ItemName>Expresso Tradicional</ItemName>

                <Actions>
                  <ItemQuantityControl quantity={1} setQuantity={() => {}} />

                  <RemoveItemButton>
                    <Trash size={18} />
                    REMOVER
                  </RemoveItemButton>
                </Actions>
              </ActionsContainer>

              <ItemPrice>R$ 9,90</ItemPrice>
            </CartItem>
          </CartItemsList>

          <OrderSummaryContainer>
            <SummaryRow>
              <SummaryText>Total de itens</SummaryText>
              <SummaryPrice>R$ 29,70</SummaryPrice>
            </SummaryRow>

            <SummaryRow>
              <SummaryText>Entrega</SummaryText>
              <SummaryPrice>R$ 3,50</SummaryPrice>
            </SummaryRow>

            <SummaryTotalContainer>
              <SummaryTotalText>Total</SummaryTotalText>
              <SummaryTotalPrice>R$ 33,20</SummaryTotalPrice>
            </SummaryTotalContainer>
          </OrderSummaryContainer>

          <ConfirmOrderButton>CONFIRMAR PEDIDO</ConfirmOrderButton>
        </ConfirmOrderContainer>
      </RightColumn>
    </Container>
  )
}
