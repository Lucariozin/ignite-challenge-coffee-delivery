import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.8);
`

interface ContainerProps {
  open: boolean
}

export const Container = styled.div<ContainerProps>`
  transition: opacity 0.2s, visibility 0.2s;

  opacity: ${({ open }) => (open ? '1' : '0')};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  max-height: 38rem;
  height: 100%;

  padding: 1rem 1rem 0 1rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  background-color: white;
`

export const CloseButton = styled.button`
  display: block;
  margin-left: auto;

  outline: 0;
  outline-color: transparent;
  line-height: 0;
  color: ${({ theme }) => theme.palette.yellow[500]};

  border: 0;
  background-color: transparent;
  border-radius: 50%;

  transition: outline-color 0.2s;

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.palette.yellow[500]};
    outline-offset: 2px;
  }
`

export const CartItemsList = styled.div`
  max-height: 35rem;
  overflow-y: scroll;

  & > div:first-child {
    padding: 8px 0 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.palette.gray[400]};
  }

  & > div:last-child {
    border-bottom: none;
    padding-bottom: 2rem;
  }

  & > div + div {
    padding: 1rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.palette.gray[400]};
  }
`
