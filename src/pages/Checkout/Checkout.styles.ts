import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
`

export const LeftColumn = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 40rem;
`

export const OrderTitle = styled.h1`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.palette.gray[800]};
`

export const RightColumn = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 28rem;
`

export const SelectedCoffeesTitle = styled.h2`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.palette.gray[800]};
`

export const ConfirmOrderContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 2.75rem;
  background-color: ${({ theme }) => theme.palette.gray[200]};
`

export const CartItemsList = styled.div`
  & > div:first-child {
    padding: 8px 0 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.palette.gray[400]};
  }
  & > div + div {
    padding: 2rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.palette.gray[400]};
  }
`

export const OrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  margin: 1.5rem 0;
`

export const SummaryRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SummaryText = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.gray[700]};
`

export const SummaryPrice = styled.span`
  color: ${({ theme }) => theme.palette.gray[700]};
`

export const SummaryTotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SummaryTotalText = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.palette.gray[800]};
`

export const SummaryTotalPrice = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.palette.gray[800]};
`

export const ConfirmOrderButton = styled.button`
  width: 100%;
  height: 2.875rem;

  color: #ffffff;
  font-weight: 700;
  font-size: 0.875rem;

  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.palette.yellow[400]};

  outline: 0;
  outline-color: transparent;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s, outline-color 0.2s;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.palette.yellow[500]};
  }

  &:focus-visible {
    background-color: ${({ theme }) => theme.palette.yellow[500]};
    outline: 1px solid ${({ theme }) => theme.palette.yellow[400]};
    outline-offset: 2px;
  }

  &:disabled {
    filter: brightness(0.9);
    cursor: not-allowed;
  }
`
