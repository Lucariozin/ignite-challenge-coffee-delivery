import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 2.5rem;
`

export const LeftColumn = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 40rem;
`

export const OrderTitle = styled.h1`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.palette.gray[800]};
`

export const RightColumn = styled.main``

export const SelectedCoffeesTitle = styled.h2``

export const ConfirmOrderContainer = styled.div``

export const CartItemsList = styled.div``

export const CartItem = styled.div``

export const ItemImage = styled.img``

export const ActionsContainer = styled.div``

export const ItemName = styled.h4``

export const Actions = styled.div``

export const RemoveItemButton = styled.button``

export const ItemPrice = styled.span``

export const OrderSummaryContainer = styled.div``

export const SummaryRow = styled.div``

export const SummaryText = styled.span``

export const SummaryPrice = styled.span``

export const SummaryTotalContainer = styled.div``

export const SummaryTotalText = styled.h3``

export const SummaryTotalPrice = styled.span``

export const ConfirmOrderButton = styled.button``
