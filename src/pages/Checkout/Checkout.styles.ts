import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin: 2.5rem 0 5rem 0;
`

export const LeftColumn = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 40rem;

  ${({ theme }) => theme.breakpoints.down('md')} {
    max-width: 26.625rem;
    margin: 0 auto 14rem auto;
  }
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

  ${({ theme }) => theme.breakpoints.down('md')} {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    max-width: none;
    background-color: ${({ theme }) => theme.palette.gray[200]};

    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;

    box-shadow: 0rem 1rem 1rem 0.5rem rgba(0, 0, 0, 0.3);
  }
`

export const SelectedCoffeesTitle = styled.h2`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.palette.gray[800]};

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin: 1rem 0 0 1rem;
  }
`

export const ConfirmOrderContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 2.75rem;
  background-color: ${({ theme }) => theme.palette.gray[200]};

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 1rem;
  }
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

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: none;
  }
`

export const SeeAllItemsButton = styled.button`
  display: none;
  align-items: center;
  gap: 0.2rem;

  background-color: transparent;
  border: 0;

  font-size: 0.875rem;
  font-weight: 700;

  color: ${({ theme }) => theme.palette.yellow[500]};

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: flex;
  }
`

export const OrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  margin: 1.5rem 0;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin: 1rem 0;
    gap: 0.5rem;
  }
`

export const SummaryRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SummaryText = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.gray[700]};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 0.75rem;
  }
`

export const SummaryPrice = styled.span`
  color: ${({ theme }) => theme.palette.gray[700]};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 0.875rem;
  }
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

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 1rem;
  }
`

export const SummaryTotalPrice = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.palette.gray[800]};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 1rem;
  }
`

export const ConfirmOrderButton = styled.button`
  display: block;
  width: 100%;
  max-width: 23rem;
  height: 2.875rem;
  margin: 0 auto;

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

export const Loader = styled.span`
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  display: block;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 auto;

  border-top: 4px solid ${({ theme }) => theme.palette.white};
  border-right: 4px solid transparent;
  border-bottom: 4px solid ${({ theme }) => theme.palette.white};
  border-left: 4px solid ${({ theme }) => theme.palette.white};
  border-radius: 50%;

  animation: rotate infinite 1s;
`
