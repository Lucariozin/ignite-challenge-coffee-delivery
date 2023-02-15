import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const Container = styled.header`
  width: 100%;
  height: 6.5rem;
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 72rem;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0 1rem;
`

export const LogoAnchor = styled(NavLink)`
  line-height: 0;
  outline: 0;
  outline-color: transparent;
  border-radius: 1px;

  transition: outline-color 0.2s;

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.palette.yellow[500]};
    outline-offset: 10px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    & > img {
      width: 4.2rem;
      height: 2rem;
    }
  }
`

export const Logo = styled.img`
  user-select: none;
`

export const CartContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

interface AddressProps {
  isVisible: boolean
}

export const Address = styled.span<AddressProps>`
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};

  display: flex;
  height: 2.375rem;
  align-items: center;
  gap: 4px;

  padding: 0 10px;
  border-radius: 6px;
  color: ${({ theme }) => theme.palette.purple[500]};
  background-color: ${({ theme }) => theme.palette.purple[100]};

  transition: opacity 0.2s;

  & svg {
    fill: ${({ theme }) => theme.palette.purple[300]};
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 0.875rem;
  }
`

interface CartAnchorProps {
  $itemsQuantity: number
}

export const CartAnchor = styled(NavLink)<CartAnchorProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.375rem;
  height: 2.375rem;
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.palette.yellow[500]};
  background-color: ${({ theme }) => theme.palette.yellow[100]};

  outline: 0;
  outline-color: transparent;
  cursor: pointer;
  transition: background-color 0.2s, outline-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.palette.yellow[200]};
  }

  &:focus-visible {
    background-color: ${({ theme }) => theme.palette.yellow[200]};
    outline: 1px solid ${({ theme }) => theme.palette.yellow[500]};
    outline-offset: 2px;
  }

  &::after {
    content: '${({ $itemsQuantity }) => $itemsQuantity}';

    position: absolute;
    opacity: ${({ $itemsQuantity }) => ($itemsQuantity ? '1' : '0')};

    display: flex;
    align-items: center;
    justify-content: center;

    height: 1.25rem;
    min-width: 1.25rem;
    margin: -2.25rem -2.25rem 0 0;
    padding: 0 4px;
    flex-shrink: 0;

    font-size: 0.75rem;
    font-weight: 700;

    border-radius: 20px;
    user-select: none;
    box-sizing: border-box;

    color: ${({ theme }) => theme.palette.white};
    background-color: ${({ theme }) => theme.palette.yellow[500]};
  }
`
