import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`

export const ItemImage = styled.img`
  user-select: none;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 3rem;
    height: 3rem;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ItemName = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.palette.gray[800]};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 0.875rem;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  height: 2rem;
`

export const RemoveItemButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 8px;

  font-size: 0.75rem;
  color: ${({ theme }) => theme.palette.gray[700]};

  border: 0;
  outline: 0;
  border-radius: 6px;
  outline-color: transparent;
  background-color: ${({ theme }) => theme.palette.gray[400]};

  cursor: pointer;
  transition: background-color 0.2s, outline-color 0.2s;

  & svg {
    color: ${({ theme }) => theme.palette.purple[300]};
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.gray[500]};
  }

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.palette.yellow[500]};
    outline-offset: 2px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: 1.8rem;
    font-size: 10px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`

export const ItemPrice = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.palette.gray[700]};
  margin: 0 0 auto auto;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 0.875rem;
  }
`
