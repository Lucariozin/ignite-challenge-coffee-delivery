import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 16rem;
  padding: 1.25rem 1.5rem;
  margin: 0 auto;

  border-radius: 6px 2.25rem;
  background-color: ${({ theme }) => theme.palette.gray[200]};

  ${({ theme }) => theme.breakpoints.down('md')} {
    max-width: 14.375rem;
  }
`

export const CoffeeImage = styled.img`
  position: relative;
  margin-top: -2.5rem;
  user-select: none;

  opacity: 0;

  animation: fadeIn forwards 2s;
  animation-delay: 500ms;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100px;
    height: 100px;
  }
`

export const LabelList = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 0.75rem;
`

export const LabelItem = styled.span`
  display: block;
  padding: 4px 8px;

  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;

  color: ${({ theme }) => theme.palette.yellow[500]};
  background-color: ${({ theme }) => theme.palette.yellow[100]};
  border-radius: 20px;
  user-select: none;
`

export const CoffeeName = styled.h3`
  font-size: 1.25rem;
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.palette.gray[800]};

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 1rem;
  }
`

export const Description = styled.p`
  text-align: center;
  font-size: 0.875rem;
  margin-top: 4px;
  color: ${({ theme }) => theme.palette.gray[600]};

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 0.75rem;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
`

export const Price = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.gray[700]};

  & strong {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-weight: 800;

    ${({ theme }) => theme.breakpoints.down('md')} {
      font-size: 1.25rem;
    }
  }
`

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const CartAnchor = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.375rem;
  height: 2.375rem;
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.palette.gray[200]};
  background-color: ${({ theme }) => theme.palette.purple[500]};

  outline: 0;
  outline-color: transparent;
  cursor: pointer;
  transition: background-color 0.2s, outline-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.palette.purple[300]};
  }

  &:focus-visible {
    background-color: ${({ theme }) => theme.palette.purple[300]};
    outline: 1px solid ${({ theme }) => theme.palette.purple[500]};
    outline-offset: 2px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 28.8px;
    height: 28.8px;

    & > svg {
      width: 1rem;
      height: 1rem;
    }
  }
`
