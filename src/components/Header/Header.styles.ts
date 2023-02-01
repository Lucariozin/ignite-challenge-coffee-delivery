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
    outline: 1px solid ${({ theme }) => theme.palette.yellow[400]};
    outline-offset: 10px;
  }
`

export const Logo = styled.img`
  user-select: none;
`

export const CartContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const Address = styled.span`
  display: flex;
  height: 2.375rem;
  align-items: center;
  gap: 4px;

  padding: 0 10px;
  border-radius: 6px;
  color: ${({ theme }) => theme.palette.purple[500]};
  background-color: ${({ theme }) => theme.palette.purple[100]};

  & svg {
    fill: ${({ theme }) => theme.palette.purple[300]};
  }
`

export const CartAnchor = styled(NavLink)`
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
`
