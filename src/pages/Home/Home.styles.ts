import styled from 'styled-components'

export const CoffeeListContainer = styled.main`
  margin-bottom: 10rem;
`

export const OurCoffeesTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.palette.gray[800]};

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 1.75rem;
  }

  ${({ theme }) => theme.breakpoints.down(410)} {
    font-size: 1.25rem;
  }
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 2rem;
  margin-top: 3.375rem;

  ${({ theme }) => theme.breakpoints.down('md')} {
    gap: 2rem 1rem;
    grid-template-columns: repeat(auto-fit, minmax(14.375rem, 1fr));
  }
`
