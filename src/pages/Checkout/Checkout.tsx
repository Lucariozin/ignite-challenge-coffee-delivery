import { Trash } from 'phosphor-react'

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

export const Checkout = () => {
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
              <ItemImage />

              <ActionsContainer>
                <ItemName>Expresso Tradicional</ItemName>

                <Actions>
                  {/* <ItemsAmountContainer>
                    <DecrementItems type="button" title="Remover uma unidade do carrinho">
                      <Minus size={14} weight="fill" />
                    </DecrementItems>

                    <ItemsAmount>1</ItemsAmount>

                    <IncrementItems type="button" title="Adicionar uma unidade no carrinho">
                      <Plus size={14} weight="fill" />
                    </IncrementItems>
                  </ItemsAmountContainer> */}

                  <RemoveItemButton>
                    <Trash size={14} />
                    REMOVER
                  </RemoveItemButton>
                </Actions>

                <ItemPrice>R$ 9,90</ItemPrice>
              </ActionsContainer>
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
