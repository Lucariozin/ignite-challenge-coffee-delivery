import styled from 'styled-components'

export const CoffeeListContainer = styled.main`
  margin-bottom: 10rem;
`

export const OurCoffeesTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.palette.gray[800]};
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: 3.375rem;
`
