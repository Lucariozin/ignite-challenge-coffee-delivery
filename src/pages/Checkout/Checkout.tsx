import { useNavigate } from 'react-router-dom'

import { useCart } from '@contexts/Cart'

import { DeliveryInformation } from './components/DeliveryInformation'
import { PaymentInformation } from './components/PaymentInformation'

import {
  CartItemsList,
  ConfirmOrderButton,
  ConfirmOrderContainer,
  Container,
  LeftColumn,
  OrderSummaryContainer,
  OrderTitle,
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
import { CartItem } from '@components/CartItem'

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
            {items.map(({ id, name, image, price, quantity }) => (
              <CartItem key={id} id={id} name={name} image={image} price={price} quantity={quantity} />
            ))}
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
