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
