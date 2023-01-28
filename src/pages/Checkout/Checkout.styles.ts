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

export const OrderInformationContainer = styled.main``

export const PaymentInformationContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.palette.gray[200]};
`

export const PaymentContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  & svg {
    margin-top: 0.2rem;
    color: ${({ theme }) => theme.palette.purple[300]};
  }
`

export const PaymentTextContainer = styled.div``

export const PaymentTextTitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.palette.gray[800]};
`

export const PaymentTextText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.gray[700]};
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const PaymentMethodItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  width: 100%;
  height: 3.25rem;
  padding: 0 1rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.palette.gray[700]};

  border-radius: 6px;
  background-color: ${({ theme }) => theme.palette.gray[400]};

  user-select: none;
  cursor: pointer;
  transition: background-color 0.2s;

  & svg {
    color: ${({ theme }) => theme.palette.purple[300]};
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.gray[500]};
  }
`
